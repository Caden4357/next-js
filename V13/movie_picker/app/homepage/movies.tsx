'use client'
import React, {useState, useContext} from 'react'
import '../globals.css'
import { MovieType } from '../context/MovieProvider'
import Link from 'next/link'
import AllMovies, { MoreMovies } from '@/lib/AllMovies'
import { MovieContext } from '../context/MovieProvider'

type Props = {
    cursor: string;
    setCursor: React.Dispatch<React.SetStateAction<string>>;
}


export default function Movies({cursor, setCursor}: Props) {


    async function getMovies(cursor: string) {
        console.log("Cursor", cursor);
        const movieData = await MoreMovies(cursor);
        console.log("Movie DATA", movieData);
        setCursor(movieData.nextCursor);
        setMovies([...movies, ...movieData.result]);
    }


    const { movies, setMovies } = useContext<MovieType>(MovieContext);

    
    return (
        <>
            <h2></h2>
            <div className='flex gap-20 flex-wrap'>
                {
                    movies?.map((movie) => (
                        <div key={movie.imdbId} className='w-60 p-3 shadow-lg shadow-indigo-800'>
                        {
                            movie.posterURLs.original?
                            <Link href={`/MovieSearchResults/${movie.imdbId}`}><img src={movie.posterURLs.original} alt={movie.title} /></Link>:
                            null
                        }
                        <h3 className='text-black dark:text-white text-center'>{movie.title}</h3>
                    </div>
                    ))
                }
            </div>
            <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => getMovies(cursor)}>More</button>
        </>
    )
}
