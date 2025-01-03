from http.server import BaseHTTPRequestHandler
import json
import csv
import requests
import io

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            # Fetch CSV data
            CSV_URL = "https://data.ny.gov/api/views/5xaw-6ayf/rows.csv?accessType=DOWNLOAD"
            response = requests.get(CSV_URL)
            response.raise_for_status()

            # Parse CSV
            csv_data = io.StringIO(response.text)
            reader = csv.DictReader(csv_data)
            json_data = [row for row in reader]

            # Send response
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(json_data).encode())
            return

        except Exception as e:
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({
                "error": "An error occurred",
                "details": str(e)
            }).encode())
