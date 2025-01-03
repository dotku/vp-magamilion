import { NextResponse } from 'next/server';
import axios from 'axios';
import { parse } from 'csv-parse/sync';

const CSV_URL = "https://data.ny.gov/api/views/5xaw-6ayf/rows.csv?accessType=DOWNLOAD";

export async function GET() {
    try {
        // You can choose to either:
        // 1. Call the Python endpoint
        const pythonEndpoint = process.env.VERCEL_URL 
            ? `https://${process.env.VERCEL_URL}/api/numbers` 
            : 'http://localhost:3000/api/numbers';
            
        const response = await axios.get(pythonEndpoint);
        return NextResponse.json(response.data);

        // 2. Or implement the logic here (as backup)
        /*
        const csvResponse = await axios.get(CSV_URL);
        const records = parse(csvResponse.data, {
            columns: true,
            skip_empty_lines: true
        });
        return NextResponse.json(records);
        */
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch or parse CSV data' },
            { status: 500 }
        );
    }
}
