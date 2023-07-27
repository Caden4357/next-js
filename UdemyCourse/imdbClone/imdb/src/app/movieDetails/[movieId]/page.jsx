const API_KEY = process.env.API_KEY;

import React from 'react';


const getMovieDetails = async (movieId) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US` , {next:{revalidate:10000}});
    const movie = await res.json();
    const trailer = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US` , {next:{revalidate:10000}});
    const trailerData = await trailer.json();
    const officialTrailer = trailerData.results.filter((trailer) => trailer.type === 'Trailer');
    const trailerKey = officialTrailer[0].key;
    return {movie, trailerKey};
}


const MovieDetails = async ({params: {movieId}}) => {
    const {movie, trailerKey} = await getMovieDetails(movieId);
    return (
        <div className='w-3/4 mx-auto p-2 border-x-2 border-black dark:border-x-2 dark:border-white'>
            <h2 className='text-3xl'>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
            <p>Runtime: {movie.runtime} Min</p>
            <div className='flex'>
                <img className="h-96 shadow-sm shadow-gray-500/50" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} alt={movie.title || movie.name} />
                <iframe className="w-full h-96" src={`https://www.youtube.com/embed/${trailerKey}`} title={movie.title || movie.name} allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <p>{movie.overview}</p>
        </div>
)}

export default MovieDetails;