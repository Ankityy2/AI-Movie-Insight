"use client";

import { useState } from "react";

export default function Home() {
  const [imdbId, setImdbId] = useState("");
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovie = async () => {
    if (!imdbId) {
      setError("Please enter IMDb ID");
      return;
    }

    if (!/^tt\d+$/.test(imdbId)) {
      setError("Invalid IMDb ID format. Example: tt0133093");
      return;
    }

    setLoading(true);
    setError("");
    setMovie(null);

    try {
      const res = await fetch(`/api/movie?imdb=${imdbId}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
      } else {
        setMovie(data);
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };
  const rating = parseFloat(omdbData.imdbRating);

const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  },
  body: JSON.stringify({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a professional movie critic AI.",
      },
      {
        role: "user",
        content: `Based on this movie plot, write a short 3-4 line audience sentiment summary and classify overall sentiment as Positive, Mixed, or Negative:\n\n${omdbData.Plot}`,
      },
    ],
  }),
});

const openaiData = await openaiRes.json();

const aiSummary = openaiData.choices?.[0]?.message?.content || "AI summary unavailable.";

let sentiment = "Mixed";
if (rating >= 7.5) sentiment = "Positive";
if (rating < 5) sentiment = "Negative";

  return (

  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4 py-12">
    {/* Glass Card */}
    <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 text-white">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-3">
        AI Movie Insight Builder
      </h1>

      <p className="text-center text-gray-300 mb-8">
        Explore movie details and audience sentiment instantly.
      </p>

      {/* Input Section */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter IMDb ID (e.g. tt0133093)"
          value={imdbId}
          onChange={(e) => setImdbId(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") fetchMovie();
          }}
          className="flex-1 p-3 rounded-xl bg-black/30 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={fetchMovie}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition duration-200 font-semibold"
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center text-gray-400 animate-pulse">
          Fetching movie insights...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center text-red-400 mt-4">
          {error}
        </div>
      )}

      {/* Movie Result */}
      {movie && (
       <div className="mt-8 bg-black/40 rounded-2xl p-6 transition duration-500 hover:scale-[1.02] animate-fadeIn">
          
          <img
           src={movie.poster !== "N/A" ? movie.poster : "https://via.placeholder.com/400x600?text=No+Image"}
            alt="Poster"
            className="rounded-xl mb-4 w-full object-cover"
          />

          <h2 className="text-2xl font-semibold mb-1">
            {movie.title}
          </h2>

          <p className="text-gray-400 mb-2">
            {movie.year} • IMDb Rating: {movie.rating}
          </p>

          <p className="text-gray-300">
            <span className="font-semibold">Cast:</span> {movie.cast}
          </p>

          <p className="mt-4 text-gray-300">
            {movie.plot}
          </p>

          <div className="mt-6">
            <p className="font-semibold">AI Summary:</p>
            <p className="text-gray-300 mt-1">
              {movie.aiSummary}
            </p>

            <div className="mt-4">
              <span className="font-semibold">Sentiment: </span>
              <span
                className={`px-4 py-1 rounded-full text-sm font-semibold ${
                  movie.sentiment === "Positive"
                    ? "bg-green-600"
                    : movie.sentiment === "Mixed"
                    ? "bg-yellow-500 text-black"
                    : "bg-red-600"
                }`}
              >
                {movie.sentiment}
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  </div>
);
}