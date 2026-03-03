<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# AI-Movie-Insight
A full-stack AI-powered movie insight application built with Next.js that fetches IMDb data and performs rule-based audience sentiment analysis.

🚀 AI Movie Insight Builder
📌 Overview

AI Movie Insight Builder is a full-stack web application that allows users to enter an IMDb movie ID and instantly view:

Movie title and poster

Release year

IMDb rating

Cast details

Plot summary

AI-generated audience sentiment summary

Overall sentiment classification (Positive / Mixed / Negative)

This project was built as part of a full-stack development internship assignment.

🛠 Tech Stack

Frontend

Next.js (App Router)

React

Tailwind CSS

Backend

Next.js API Routes

External API

OMDb API (for movie data)

🤖 Sentiment Analysis Logic

Instead of using heavy AI services, this project implements a lightweight rule-based sentiment classifier:

IMDb rating ≥ 7.5 → Positive

IMDb rating between 5 and 7.4 → Mixed

IMDb rating < 5 → Negative

This approach ensures fast performance and zero dependency on paid AI services while still providing meaningful insights.

⚙️ Features

Input validation for IMDb ID format

Keyboard support (Enter to search)

Dynamic sentiment classification

Modern glassmorphism UI

Responsive design

Error handling

Loading animations

🧪 How to Run Locally

Clone the repository:

git clone https://github.com/YOUR_USERNAME/ai-movie-insight.git

Install dependencies:

npm install

Create a .env.local file in root and add:

OMDB_API_KEY=your_api_key_here

Run the development server:

npm run dev

Open:
http://localhost:3000

🌍 Deployment

The application is deployed using Vercel.

Environment variables must be configured in Vercel dashboard before deployment.

📈 Future Improvements

Real AI sentiment using OpenAI API

Review scraping integration

Movie search by name

Trending movies section

Advanced UI animations

👨‍💻 Author

Built by Ankit Yadav
Full Stack Developer Intern Candidate
>>>>>>> 6ba68a773694a0befe311568c6f6abc8166a4ece
