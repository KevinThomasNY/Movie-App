"use client";
import React, { useState, useEffect } from "react";
import TV from "./tv";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("The Walking Dead");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const storedValue = localStorage.getItem("searchTV");
    if (storedValue) {
      setSearchTerm(storedValue);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1&include_adult=false&query=${searchTerm}`
      );
      const data = await response.json();
      console.log(data);
      setResults(data);
    };

    fetchData();
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    localStorage.setItem("searchTV", event.target.value);
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
            <TV
              key={movie.id}
              id={movie.id}
              title={movie.original_name}
              poster_path={movie.poster_path}
              release_date={movie.first_air_date}
            />
          ))}
      </div>
    </div>
  );
}
