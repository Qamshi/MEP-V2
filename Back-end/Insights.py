# from facebook_business.api import FacebookAdsApi
# from facebook_business.adobjects.adaccount import AdAccount
# from facebook_business.adobjects.adsinsights import AdsInsights
# import json
# # Set up your credentials
# access_token = 'EAAU7sLXCjz0BOyQQnrzlYGwzmE7ZCZAucKeZCbucF0doqeuWCjP6CBTqpy1D6UoIdv4zDaSQsVjtFp5ZC71oONDm8vZAL9MElwQBxFeO3xXzvXFGaloRqzFw1srZAV6kGfTOGHuM8gECdPJ5JvphmJZBbusgudyTvz6jhTW1mZBm47a47UZBYZAkP8w4h89ZChV0eBYdpQ8b0gVXx0NyWtceq1pMuYy5AZDZD'
# ad_account_id = 'act_2023365878046899'
# FacebookAdsApi.init(access_token=access_token)

# # Define the fields you want to retrieve
# fields = [
#     AdsInsights.Field.campaign_name,
#     AdsInsights.Field.reach,
#     AdsInsights.Field.impressions,
#     AdsInsights.Field.clicks,
#     AdsInsights.Field.spend,
#     AdsInsights.Field.inline_post_engagement,  # Add post engagement to the fields
#     AdsInsights.Field.created_time,  # Add created date to the fields
# ]

# # Define the parameters for the API call
# params = {
#     'level': 'campaign',  # Retrieve insights at the campaign level
#     'time_range': {'since': '2024-05-10', 'until': '2024-05-10'},  # Adjust the date range as needed
#     'fields': fields,
# }

# # Make the API call to retrieve insights
# insights = AdAccount(ad_account_id).get_insights(fields=fields, params=params)

# # Process and print the insights
# for insight in insights:
#     campaign_name = insight.get(AdsInsights.Field.campaign_name, 'N/A')
#     reach = insight.get(AdsInsights.Field.reach, 'N/A')
#     impressions = insight.get(AdsInsights.Field.impressions, 'N/A')
#     clicks = insight.get(AdsInsights.Field.clicks, 'N/A')
#     spend = insight.get(AdsInsights.Field.spend, 'N/A')
#     post_engagement = insight.get(AdsInsights.Field.inline_post_engagement, 'N/A')  # Get post engagement
#     created_date = insight.get(AdsInsights.Field.created_time, 'N/A')  # Get created date

#     print("Campaign Name:", campaign_name)
#     print("Reach:", reach)
#     print("Impressions:", impressions)
#     print("Clicks:", clicks)
#     print("Spend:", spend)
#     print("Post Engagement:", post_engagement)  # Print post engagement
#     print("Created Date:", created_date)  # Print created date
#     print("--------------")

# with open('insights_data.json', 'w') as f:
#     json.dump(data2, f)




import json  # Make sure to import json
from facebook_business.api import FacebookAdsApi
from facebook_business.adobjects.adaccount import AdAccount
from facebook_business.adobjects.adsinsights import AdsInsights

# Set up your credentials
access_token = 'EAAU7sLXCjz0BO0kYmi9ST6ytVQQ2xDyKFDbX3IwkhufKssqZCSDtDTsEZBoP89J5UfntOQs3N9eP35FLl4qfAU0x1ovckDeLadTLRexYCYeEiylJxsKRmaSelRyPPFjJKBAINqgmFEVsAFeCYy5k1KJh41cwRJpj6xq2zmbZC4IEohBihCLDZCwkzv093A4yYQyPPUU2aRFkZCX00pPcxPeaYxQZDZD'
ad_account_id = 'act_2023365878046899'
FacebookAdsApi.init(access_token=access_token)

# Define the fields you want to retrieve
fields = [
    AdsInsights.Field.campaign_name,
    AdsInsights.Field.reach,
    AdsInsights.Field.impressions,
    AdsInsights.Field.clicks,
    AdsInsights.Field.spend,
    AdsInsights.Field.inline_post_engagement,  # Add post engagement to the fields
    AdsInsights.Field.created_time,  # Add created date to the fields
]

# Define the parameters for the API call
params = {
    'level': 'campaign',  # Retrieve insights at the campaign level
    'time_range': {'since': '2024-05-10', 'until': '2024-05-10'},  # Adjust the date range as needed
}

# Make the API call to retrieve insights
insights = AdAccount(ad_account_id).get_insights(fields=fields, params=params)

# Initialize an empty list to collect the data
data = []  # This will contain all the insights data you want to export

# Process and print the insights
for insight in insights:
    campaign_name = insight.get(AdsInsights.Field.campaign_name, 'N/A')
    reach = insight.get(AdsInsights.Field.reach, 'N/A')
    impressions = insight.get(AdsInsights.Field.impressions, 'N/A')
    clicks = insight.get(AdsInsights.Field.clicks, 'N/A')
    spend = insight.get(AdsInsights.Field.spend, 'N/A')
    post_engagement = insight.get(AdsInsights.Field.inline_post_engagement, 'N/A')  # Get post engagement
    created_date = insight.get(AdsInsights.Field.created_time, 'N/A')  # Get created date

    # Store relevant information in data list
    data.append({
        "Campaign Name": campaign_name,
        "Creation Time": created_date,
        "Status": "Active",  # This value can be changed as needed
        "Clicks" : "click",
        "reach" : reach,
        "impressions" : impressions,
        "post_engagement" : post_engagement,
    })

    print("Campaign Name:", campaign_name)
    print("Reach:", reach)
    print("Impressions:", impressions)
    print("Clicks:", clicks)
    print("Spend:", spend)
    print("Post Engagement:", post_engagement)  # Print post engagement
    print("Created Date:", created_date)  # Print created date
    print("--------------")

# Write the data to a JSON file
with open('insights_data.json', 'w') as f:
    json.dump(data, f)  # Corrected to write the data variable instead of undefined data2
