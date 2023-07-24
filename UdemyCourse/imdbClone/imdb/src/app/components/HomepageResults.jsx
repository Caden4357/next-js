import React from 'react';

const HomepageResults = ({ results }) => {
    return (
        <>
            {
                results.map((movie) => (
                    <div key={movie.id} className="w-1/6">
                        <img className="w-full" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} alt={movie.title || movie.name} />
                        <h3>{movie.original_title}</h3>
                    </div>
                ))
            }
        </>
    )
}

export default HomepageResults;