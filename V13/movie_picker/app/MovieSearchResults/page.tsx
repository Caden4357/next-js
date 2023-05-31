'use client'
import React, {useContext} from 'react'
import { MovieContext, MovieProvider } from '../context/MovieProvider'
import SearchResults from './SearchResults';
export default function Main() {
  const { movies, setMovies } = useContext(MovieContext);
  return (
    <div>
      <SearchResults/>
    </div>
  )
}
