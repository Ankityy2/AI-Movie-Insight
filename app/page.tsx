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
        setError(data.error || "Something went wrong");
      } else {
        setMovie(data);
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-black text-white overflow-hidden px-4 py-16">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-blue-900/40 blur-3xl opacity-60"></div>

      {/* Main Card */}
      <div className="relative w-full max-w-3xl bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-10">

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-center mb-4 tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          AI Movie Insight Builder
        </h1>

        <p className="text-center text-gray-400 mb-10 text-lg">
          Instantly analyze movies with real-time AI-powered audience insights.
        </p>

        {/* Search Section */}
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Enter IMDb ID (e.g. tt0133093)"
            value={imdbId}
            onChange={(e) => setImdbId(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") fetchMovie();
            }}
            className="flex-1 px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <button
            onClick={fetchMovie}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:shadow-xl transition duration-300 font-semibold"
          >
            Analyze
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

        {/* Result Section */}
        {movie && (
          <div className="mt-10 bg-white/5 rounded-3xl p-8 border border-white/10 animate-fadeIn">

            <div className="grid md:grid-cols-2 gap-8 items-start">

              <img
                src={
                  movie.poster && movie.poster !== "N/A"
                    ? movie.poster
                    : "/no-poster.png"
                }
                alt={movie.title}
                className="rounded-2xl shadow-xl"
              />


              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {movie.title}
                </h2>

                <p className="text-gray-400 mb-4">
                  {movie.year} • IMDb {movie.rating}
                </p>

                <p className="text-gray-300 mb-4">
                  <span className="font-semibold">Cast:</span> {movie.cast}
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {movie.plot}
                </p>

                <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
                  <p className="font-semibold mb-2">AI Summary</p>
                  <p className="text-gray-300 mb-4">
                    {movie.aiSummary}
                  </p>

                  <span
                    className={`inline-block px-5 py-2 rounded-full text-sm font-semibold ${movie.sentiment === "Positive"
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
          </div>
        )}

      </div>
    </div>
  );
} 