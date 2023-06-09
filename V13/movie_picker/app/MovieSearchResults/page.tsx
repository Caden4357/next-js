'use client'
import React, {Suspense, useContext} from 'react'
import { MovieContext, MovieProvider } from '../context/MovieProvider'
import SearchResults from './SearchResults';
import Loading from './Loading';
export default function Main() {
  const { movies, setMovies } = useContext(MovieContext);
  return (
    <Suspense fallback={<Loading/>}>
      <SearchResults/>
    </Suspense>

  )
}
