# VP MegaMillion

A Flask API that converts CSV data from a New York State Magamillion data source to JSON format.

> **Note:** magamillion has legal limmitation, most selling on line is illegal.

## Endpoints

- `GET /`: Health check endpoint
- `GET /numbers`: return the recent numbers of magamillions

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

## Reference

1. https://www.usatoday.com/story/money/2023/08/01/mega-millions-how-where-buy-lottery-ticket/70503550007/
2. https://www.bettingusa.com/lottery/mega-millions/
3. https://www.lottosonline.com/
4. https://www.nj.com/lottery/2022/07/mega-millions-2022-where-to-buy-tickets-how-to-buy-online-price-cut-off-time-app-purchases.html
5. https://www.quora.com/If-someone-buys-Powerball-or-Mega-Million-lottery-tickets-from-the-United-States-for-me-and-sends-it-to-me-will-this-lottery-game-be-eligible
6. https://downtack.com/en/us-lottery-api.html
7. https://data.ny.gov/Government-Finance/Lottery-Mega-Millions-Winning-Numbers-Beginning-20/5xaw-6ayf/about_data
8. https://docs.apiverve.com/api/lottery
