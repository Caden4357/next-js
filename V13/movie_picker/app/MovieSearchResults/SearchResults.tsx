'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import { MovieContext, MovieProvider } from '../context/MovieProvider'
export default function SearchResults() {
    const { movies, setMovies } = useContext(MovieContext);
    return (
        <div className='flex gap-20 flex-wrap'>
            {movies.map((movie) => (
                <div key={movie.imdbId} className='w-40'>
                    {
                        movie.posterURLs.original?
                        <Link href={`/MovieSearchResults/${movie.imdbId}`}><img src={movie.posterURLs.original} alt={movie.title} className='h-40 w-40'/></Link>:
                        null
                    }
                    <h3 className='dark:text-white text-center'>{movie.title}</h3>
                    {
                        movie.youtubeTrailerVideoLink?
                        <a href={movie.youtubeTrailerVideoLink} target='_blank' rel='noreferrer' className='dark:text-white text-center block text-center bg-sky-600'>Watch Trailer</a>:
                        null
                    }
                </div>
            ))}
        </div>
    )
}
