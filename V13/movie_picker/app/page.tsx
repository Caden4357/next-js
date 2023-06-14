'use client'
import { useEffect, useState, useContext } from "react";
import HomePage from "./homepage/home"
import AllMovies from '@/lib/AllMovies'
// import { MovieType } from "./homepage/home";
import { MovieContext } from './context/MovieProvider'

export default function Home() {
  const { movies, setMovies } = useContext(MovieContext);

  useEffect(() => {
    async function fetchData() {
      const movieData = await AllMovies();
      console.log(movieData);
      setMovies(movieData.result);
    }

    fetchData();
  }, []);

  return (
    <div>
      {movies ? (
        <HomePage movies={movies} setMovies={setMovies} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
