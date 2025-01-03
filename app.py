from flask import Flask, jsonify, request
import csv
import requests
import io

app = Flask(__name__)

CSV_URL = "https://data.ny.gov/api/views/5xaw-6ayf/rows.csv?accessType=DOWNLOAD"

@app.route('/numbers', methods=['GET'])
def convert_csv_to_json():
    try:
        # Fetch the CSV file
        response = requests.get(CSV_URL)
        response.raise_for_status()  # Raise an error for bad HTTP responses

        # Read the CSV data
        csv_data = io.StringIO(response.text)
        reader = csv.DictReader(csv_data)

        # Convert to JSON
        json_data = [row for row in reader]

        return jsonify(json_data), 200
    except requests.exceptions.RequestException as e:
        return jsonify({"error": "Failed to fetch CSV file", "details": str(e)}), 500
    except Exception as e:
        return jsonify({"error": "An error occurred", "details": str(e)}), 500

# Add a root route for health check
@app.route('/')
def home():
    return jsonify({"status": "ok"}), 200

if __name__ == '__main__':
    app.run(debug=True)
