from facebook_business.api import FacebookAdsApi
from facebook_business.adobjects.adaccount import AdAccount
from facebook_business.adobjects.adsinsights import AdsInsights
from pymongo import MongoClient
from datetime import datetime, timedelta
import facebook
import json

# Set up MongoDB connection
client = MongoClient('mongodb+srv://qamshi69:5EjI05z8Fbkr79gT@cluster0.eulkllh.mongodb.net/Customers')
db = client.insights
collection = db.campaigns

def main(user_email,access_token,ad_account_id):
    # Query the database for documents with the provided email address
    FacebookAdsApi.init(access_token=access_token)
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
        AdsInsights.Field.date_stop,
    ]
    ids = []

    # Iterate over documents with the provided email address
    for document in documents:
        campaign_ids = document.get("campaign_id", "")
        ids.append(campaign_ids)

    for campaign_id in ids:
        params = {
            'level': 'campaign',
            'time_range': {'since': '2023-05-13', 'until': datetime.now().strftime('%Y-%m-%d')},
            'fields': fields,
            'filtering': [{'field': 'campaign.id', 'operator': 'EQUAL', 'value': campaign_id}]
        }
        
        try:
            insights = AdAccount(f'act_{ad_account_id}').get_insights(fields=fields, params=params)
            current_time = datetime.now()
            formatted_time = current_time.strftime('%Y-%m-%d')

            if insights:
                for insight in insights:
                    insight_data = insight.export_all_data()
                    print(insight)
                    # Access the "date_stop" field and check the status
                    date_stop = insight_data.get("created_time", None)
                    if date_stop:
            # Convert date_stop to a datetime object
                       date_stop_dt = datetime.strptime(date_stop, '%Y-%m-%d')
            
            # Add one day to date_stop
                       new_date_stop_dt = date_stop_dt + timedelta(days=1)
            
            # Format new_date_stop back to string if needed
                       new_date_stop = new_date_stop_dt.strftime('%Y-%m-%d')
                    else:
                        new_date_stop = None
        
                    
                    print(new_date_stop,formatted_time)
                    status = 'Expired'
                    if new_date_stop and formatted_time <= new_date_stop:
                        status = 'Active'

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
                            "status": status
                        }
                    }
                    # Update the existing document or insert if not exist
                    collection.update_one(filter, update_fields, upsert=True)
                    print('Ad has been activated')
                    print("Campaign Name:", insight.get('campaign_name', 'N/A'))
                    print("Reach:", insight.get('reach', 'N/A'))
                    print("Impressions:", insight.get('impressions', 'N/A'))
                    print("Clicks:", insight.get('clicks', 'N/A'))
                    print("Spend:", insight.get('spend', 'N/A'))
                    print("Post Engagement:", insight.get('inline_post_engagement', 'N/A'))
                    print("Created Date:", insight.get('created_time', 'N/A'))
                    print("Status:", status)
                    print("--------------")

            else:
                # Fetch data from Facebook API if no insights found
                graph = facebook.GraphAPI(access_token)
                campaign = graph.get_object(id=campaign_id, fields='name,created_time')
                name = campaign.get('name')
                created_time = campaign.get('created_time')
                original_datetime = datetime.strptime(created_time, "%Y-%m-%dT%H:%M:%S%z")

                # Format to desired output format
                new_datetime_str = original_datetime.strftime("%Y-%m-%d")
                # Construct the filter
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
                print("Created Date:", new_datetime_str)
                print('Ad is not activated yet')

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
    user = new_data
    # Writing data into data2.js
    return user
if __name__ == "__main__":
    main()
