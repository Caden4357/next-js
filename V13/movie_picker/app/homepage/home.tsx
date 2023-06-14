'use client'
import React, {useState, useContext} from 'react'
import '../globals.css'
import { MovieType } from '../context/MovieProvider'
import Link from 'next/link'


export default  function HomePage({movies}: MovieType) {
    return (
        <div className='vh90-h flex gap-20 flex-wrap'>
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
    )
}
