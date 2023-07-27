import Link from 'next/link';
import React from 'react';

const HomepageResults = ({ results }) => {
    console.log(results);
    return (
        <>
            {
                results.map((movie) => (
                    
                    <Link key={movie.id} className="w-1/6" href= {movie.media_type === 'movie'?  `/movieDetails/${movie.id}`: `/tvShowDetails/${movie.id}`}>
                        <img className="w-full" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} alt={movie.title || movie.name} />
                        <h3>{movie.title || movie.name}</h3>
                    </Link>
                ))
            }
        </>
    )
}

export default HomepageResults;