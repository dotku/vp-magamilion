# CSV to JSON Converter API

A Flask API that converts CSV data from a New York State data source to JSON format.

## Endpoints

- `GET /`: Health check endpoint
- `GET /convert-csv-to-json`: Converts the CSV data to JSON format

## Local Development

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the application:
```bash
python app.py
```

## Deployment

This project is configured for Vercel deployment. To deploy:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy to Vercel:
```bash
vercel
```
