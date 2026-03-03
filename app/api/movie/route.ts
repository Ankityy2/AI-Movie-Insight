import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const imdb = searchParams.get("imdb");

  if (!imdb) {
    return NextResponse.json({ error: "IMDb ID required" }, { status: 400 });
  }

  try {
    const omdbRes = await fetch(
      `https://www.omdbapi.com/?i=${imdb}&apikey=${process.env.OMDB_API_KEY}`
    );

    const omdbData = await omdbRes.json();

    if (omdbData.Response === "False") {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }

    // Fake AI for now (real AI next step)
const rating = parseFloat(omdbData.imdbRating);

let sentiment = "";
let aiSummary = "";

if (rating >= 7.5) {
  sentiment = "Positive";
  aiSummary = "Audience response is largely positive with strong appreciation for performances and storyline.";
} else if (rating >= 5) {
  sentiment = "Mixed";
  aiSummary = "Audience reactions are mixed, with both praise and criticism for various aspects of the film.";
} else {
  sentiment = "Negative";
  aiSummary = "Audience sentiment appears mostly negative, with notable dissatisfaction in reviews.";
}
    return NextResponse.json({
      title: omdbData.Title,
      year: omdbData.Year,
      rating: omdbData.imdbRating,
      cast: omdbData.Actors,
      plot: omdbData.Plot,
      poster: omdbData.Poster,
      aiSummary,
      sentiment,
    });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}