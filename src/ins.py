from facebook_business.api import FacebookAdsApi
from facebook_business.adobjects.adaccount import AdAccount
from facebook_business.adobjects.adsinsights import AdsInsights
from pymongo import MongoClient
from datetime import datetime
import facebook
import pymongo
import json

# Set up MongoDB connection
client = MongoClient('mongodb+srv://qamshi69:5EjI05z8Fbkr79gT@cluster0.eulkllh.mongodb.net/Customers')
db = client.insights
collection = db.campaigns

# Set up your credentials
access_token = 'EAAU7sLXCjz0BO788NzfTPA0HzK4MD3GRNUQ6ummA9bZCZBAfTH6LvCeYA6sYx37U9DEG0HWjnmQzmx3lspUdSAt8FcomLrcfZCD58ttrYINPOBJivAyN0hMQdg5X9HGMt9vRMM618UrXMGUuE1n4bZBIWQZC4SJNswseVSPNemYCPZAgeHspVS2h9uJACoZCBicgl69F54AIRhlQueKpuZAKTC19wRcuySQvl2vf'
ad_account_id = '2023365878046899'
FacebookAdsApi.init(access_token=access_token)

def main(user_email):
    # Query the database for documents with the provided email address
    documents = collection.find({"user_email": user_email})

    # Define fields to fetch from insights
    fields = [
        AdsInsights.Field.campaign_name,
        AdsInsights.Field.reach,
        AdsInsights.Field.impressions,
        AdsInsights.Field.clicks,
        AdsInsights.Field.spend,
        AdsInsights.Field.inline_post_engagement,
        AdsInsights.Field.created_time,
    ]
    ids = []

    # Iterate over documents with the provided email address
    for document in documents:
        campaign_ids = document.get("campaign_id", "")
        ids.append(campaign_ids)

        # Fetch insights for each campaign ID
    for campaign_id in ids:
        params = {
            'level': 'campaign',
            'time_range': {'since': '2023-05-13', 'until': datetime.now().strftime('%Y-%m-%d')},
            'fields': fields,
            'filtering': [{'field': 'campaign.id', 'operator': 'EQUAL', 'value': campaign_id}]
        }

        try:
            insights = AdAccount(f'act_{ad_account_id}').get_insights(fields=fields, params=params)
            if insights:
                for insight in insights:
                    insight_data = insight.export_all_data()
                    # Construct the filter
                    filter = {"user_email": user_email, "campaign_id": campaign_id}

                    # Create update fields
                    update_fields = {
                        "$set": {
                            "campaign_name": insight_data.get('campaign_name', 'N/A'),
                            "reach": insight_data.get('reach', 'N/A'),
                            "impressions": insight_data.get('impressions', 'N/A'),
                            "clicks": insight_data.get('clicks', 'N/A'),
                            "spend": insight_data.get('spend', 'N/A'),
                            "post_engagement": insight_data.get('inline_post_engagement', 'N/A'),
                            "created_date": insight_data.get('created_time', 'N/A'),
                            "status": 'Active'
                        }
                    }
                    # Update the existing document or insert if not exist
                    collection.update_one(filter, update_fields, upsert=True)
                    print('Ad has been activated', )
                    print("Campaign Name:", insight.get('campaign_name', 'N/A'))
                    print("Reach:", insight.get('reach', 'N/A'))
                    print("Impressions:", insight.get('impressions', 'N/A'))
                    print("Clicks:", insight.get('clicks', 'N/A'))
                    print("Spend:", insight.get('spend', 'N/A'))
                    print("Post Engagement:", insight.get('inline_post_engagement', 'N/A'))
                    print("Created Date:", insight.get('created_time', 'N/A'))
                    print("--------------")

            else:
                # Fetch data from Facebook API if no insights found
                graph = facebook.GraphAPI(access_token)
                campaign = graph.get_object(id=campaign_id, fields='name,created_time')
                name = campaign.get('name')

                created_time = campaign.get('created_time')
                print (created_time)
                original_datetime = datetime.strptime(created_time, "%Y-%m-%dT%H:%M:%S%z")

                # Format to desired output format
                new_datetime_str = original_datetime.strftime("%Y-%m-%d")
                filter = {"user_email": user_email, "campaign_id": campaign_id}
                # Create update fields
                update_fields = {
                    "$set": {
                        "campaign_name": name,
                        "reach": 0,
                        "impressions": 0,
                        "clicks": 0,
                        "spend": 0.0,
                        "post_engagement": 0,
                        "created_date": new_datetime_str,
                        "status": 'Inactive'
                    }
                }
                # Update the existing document or insert if not exist
                collection.update_one(filter, update_fields, upsert=True)
                print("Campaign Name:", name)
                print("Created Date:", created_time)
                print('Ad is not activated yet')
                print("--------------")
        except Exception as e:
            print(f"Error fetching insights for campaign ID {campaign_id}: {str(e)}")

    # Fetch documents from MongoDB
    documents = collection.find({"user_email": user_email})

    # Update data2.js
    new_data = []
    for index, campaign in enumerate(documents):
        if 'campaign_name' in campaign:  # Check if 'campaign_name' exists in the document
            data_entry = {
                "key": str(index + 1),
                "name": campaign['campaign_name'],
                "Creation_Time": campaign.get('created_date', 'N/A'),  # Handle missing 'created_date' field gracefully
                "status": campaign.get('status', 'Inactive')
            }
            new_data.append(data_entry)
        else:
            print(f"Warning: 'campaign_name' field not found in document {index + 1}. Skipping...")

    # Writing data into data2.js
    with open('data2.js', 'w') as file:
        file.write("export const users = [\n")
        for data in new_data:
            file.write(f"  {json.dumps(data)},\n")
        file.write("];\n")

if __name__ == "__main__":
    
    
    main()