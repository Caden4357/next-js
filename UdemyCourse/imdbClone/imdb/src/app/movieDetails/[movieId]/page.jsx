const API_KEY = process.env.API_KEY;

import React from 'react';


const MovieDetails = async ({params: {movieId}}) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US` , {next:{revalidate:10000}});
    const movie = await res.json();
    console.log(movie);
    return (
        <div className='w-8/12 border border-red-200 mx-auto'>
            <h2 className='text-3xl'>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
            <p>Runtime: {movie.runtime} Min</p>
            <img className="w-3/6" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} alt={movie.title || movie.name} />
            <p>{movie.overview}</p>
        </div>
)}

export default MovieDetails;