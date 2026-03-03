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
