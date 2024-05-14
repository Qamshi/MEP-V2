from flask import Flask, request, jsonify
from ins import main
app = Flask(__name__)

# CORS handling
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST')
    return response

# Route to receive user email
@app.route('/receive-user-email', methods=['POST'])
def receive_user_email():
    if request.method == 'POST':
        data = request.json
        user_email = data.get('userEmail')  # Extract user email from JSON data
        print("Received email:", user_email)  # Print received email for debugging
        main(user_email) 
        # Process the user email as needed
        # For example, you can save it to a database
        
        return jsonify({'message': 'User email received successfully'})
    else:
        return jsonify({"error": "Method not allowed"}), 405  # Return error if method is not allowed

if __name__ == '__main__':
    app.run(host='localhost', port=9000, debug=True)
