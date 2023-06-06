'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import { MovieContext, MovieProvider } from '../context/MovieProvider'
// border-2 border-indigo-600
export default function SearchResults() {
    const { movies, setMovies } = useContext(MovieContext);
    return (
        <div className='flex gap-20 flex-wrap'>
            {movies.map((movie) => (
                <div key={movie.imdbId} className='w-60 p-3 shadow-lg shadow-indigo-800'>
                    {
                        movie.posterURLs.original?
                        <Link href={`/MovieSearchResults/${movie.imdbId}`}><img src={movie.posterURLs.original} alt={movie.title} /></Link>:
                        null
                    }
                    <h3 className='text-black dark:text-white text-center'>{movie.title}</h3>
                    {/* {
                        movie.youtubeTrailerVideoLink?
                        <a href={movie.youtubeTrailerVideoLink} target='_blank' rel='noreferrer' className='dark:text-white text-center block text-center bg-sky-600'>Watch Trailer</a>:
                        null
                    } */}
                </div>
            ))}
        </div>
    )
}
