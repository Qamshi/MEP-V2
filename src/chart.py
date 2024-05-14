from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Set up MongoDB connection
client = MongoClient('mongodb+srv://qamshi69:5EjI05z8Fbkr79gT@cluster0.eulkllh.mongodb.net/Customers')
db = client.insights
collection = db.campaigns


@app.route('/send-data', methods=['POST'])
def receive_data():
    data = request.json
    user_email = str(data.get('userEmail'))
    campaign_name = str(data.get('campaignName'))
    print("Received data:", user_email, campaign_name)  # Added logging

    document = collection.find_one({"user_email": user_email, "campaign_name": campaign_name})

    if document:
        insights = {
            "campaign_name": document.get("campaign_name", "N/A"),
            "reach": document.get("reach", "N/A"),
            "impressions": document.get("impressions", "N/A"),
            "clicks": document.get("clicks", "N/A"),
            "spend": document.get("spend", "N/A"),
            "post_engagement": document.get("post_engagement", "N/A"),
            "created_date": document.get("created_date", "N/A"),
            "status": document.get("status", "N/A")
        }
        print("reach:", insights["reach"])
        print("impression:", insights["impressions"])
        print("clicks:", insights["clicks"])
        print("postEngagements:", insights["post_engagement"])
        return jsonify(insights)
    else:
        error_message = {
            "error": f"No campaign found for user email '{user_email}' and campaign name '{campaign_name}'."}
        print(error_message)
        return jsonify(error_message), 404  # Return a 404 status code if no document is found


if __name__ == "__main__":
    app.run(debug=True, port=2000)
