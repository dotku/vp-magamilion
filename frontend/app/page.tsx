'use client'

import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await axios.get(`${process.env.API_URL}/numbers`)
      setData(response.data)
    } catch (err) {
      setError('Failed to fetch data. Please try again.')
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">NY State Data Viewer</h1>
        
        <button
          onClick={fetchData}
          disabled={loading}
          className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {data.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Results</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    {Object.keys(data[0]).map((header) => (
                      <th key={header} className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index} className="border-t">
                      {Object.values(row).map((value: any, i) => (
                        <td key={i} className="px-6 py-4 text-sm">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
