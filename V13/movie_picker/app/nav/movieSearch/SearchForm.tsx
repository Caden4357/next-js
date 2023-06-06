'use client'
import React, {useState, useContext} from 'react'
import SearchMovies from '@/lib/SearchMovies'

import { useRouter } from 'next/navigation'
import { MovieContext } from '../../context/MovieProvider'


export default function SearchForm() {
    const { movies, setMovies } = useContext(MovieContext);
    const router = useRouter()
    const [query, setQuery] = useState('')

    const searchMovies = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Submitting")
        const movies = await SearchMovies(query)
        console.log(movies)
        setMovies(movies.result)
        router.replace('/MovieSearchResults')
    }

    return (
        <form className='w-6/12' onSubmit={searchMovies}>
            <input type="text" placeholder="Search for a movie" className='p-1 w-80 text-black' onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit" className='dark:bg-sky-600 p-1'>Search</button>
        </form>
    )
}
