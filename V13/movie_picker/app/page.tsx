'use client'
import { useEffect, useState, useContext, Suspense } from "react";
import AllMovies from '@/lib/AllMovies'
// import { MovieType } from "./homepage/home";
import { MovieContext } from './context/MovieProvider'
import Movies from "./homepage/movies";

export default function Home() {
  const { movies, setMovies } = useContext(MovieContext);
  const [cursor, setCursor] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      const movieData = await AllMovies();
      console.log("Movie DATA", movieData.nextCursor);
      setMovies(movieData.result);

      setCursor(movieData.nextCursor);
    }

    fetchData();
  }, []);

  console.log("Cursor", cursor);

  return (
    <div>
      {movies ? (
        <Suspense fallback='Loading...'>
          <Movies cursor={cursor} setCursor={setCursor} />
        </Suspense>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
