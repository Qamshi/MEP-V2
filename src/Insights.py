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
        access_token = 'EAAU7sLXCjz0BO86RGaAnZBevTG7uF5jFW1T8qAk8xFBlylhWbJ8yF0IskaNZAgCQPSehtl1Jn0X2nguUpAdB5zP7P59AAWIM63BWyQBS6f7n1M2Hlgd52EWnpqWgHWkGuCONBMLYbhwsw1ciEGiZAlAPy2s6Nt8p1xqa5W6HXckqhbZAx26NFRHHWgGUia93L1uMWeMbf3Dd7Yb6rKdun1j5jPK5KA0aP34ZD'
        ad_account_id = '2023365878046899'
        main(user_email,access_token,ad_account_id) 
        # Process the user email as needed
        # For example, you can save it to a database
        
        return jsonify({'message': 'User email received successfully'})
    else:
        return jsonify({"error": "Method not allowed"}), 405  # Return error if method is not allowed

if __name__ == '__main__':
    app.run(host='localhost', port=9000, debug=True)
