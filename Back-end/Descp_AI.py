from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def generate_product_description(product_name):
    api_key = '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'
    url = 'https://api.anthropic.com/v1/complete'

    prompt = f"\n\nHuman: dont write anything else just write exactly 3-4 lines short with proper formatting and eye-catching product description for: {product_name}\n\nAssistant:"

    headers = {
        'Content-Type': 'application/json',
        'X-API-Key': api_key,
        'anthropic-version': '2023-06-01'
    }

    data = {
        'prompt': prompt,
        'max_tokens_to_sample': 60,  # Reduced max_tokens_to_sample for shorter descriptions
        'model': 'claude-v1'
    }

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()  # Raise an exception for 4xx or 5xx status codes
        result = response.json()
        product_description = result['completion'].strip()
        return product_description
    except requests.exceptions.RequestException as e:
        print("Error occurred while generating product description.")
        print("Status Code:", e.response.status_code)
        print("Error Message:", e.response.text)
        return None

@app.route('/generate-description', methods=['POST'])
def generate_description():
    data = request.get_json()
    product_name = data.get('product_name')
    description = generate_product_description(product_name)
    if description:
        return jsonify({'description': description}), 200
    else:
        return jsonify({'error': 'Failed to generate description'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
