"use client";
import React, { useState, useEffect } from "react";
import Movie from "./Movie";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("Batman");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const storedValue = localStorage.getItem("searchTerm");
    if (storedValue) {
      setSearchTerm(storedValue);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1&include_adult=false&query=${searchTerm}`
      );
      const data = await response.json();
      console.log(data);
      setResults(data);
    };

    fetchData();
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    localStorage.setItem("searchTerm", event.target.value);
  };

  return (
    <div className="container mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for a Movie"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-8"
      />
      <div className="grid gap-12 lg:gap-10 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {searchTerm.length > 0 &&
          results.results &&
          results.results?.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
      </div>
    </div>
  );
}
