import React from 'react'
import Link from 'next/link';
export default function Results({ results }) {
    return (
        <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
            <Link key={results.id} className="" href={results.media_type === 'movie' ? `/movieDetails/${results.id}` : `/tvShowDetails/${results.id}`}>
                <img className="w-full" src={`https://image.tmdb.org/t/p/original/${results.backdrop_path || results.poster_path}`} alt={results.title || results.name} />
                <h3>{results.title || results.name}</h3>
                <p>{results.overview}</p>
            </Link>
        </div>
    )
}
