const API_KEY = process.env.API_KEY;

import React from 'react';


const getMovieDetails = async (tvShowId) => {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${API_KEY}&language=en-US` , {next:{revalidate:10000}});
    const show = await res.json();
    // const trailer = await fetch(`https://api.themoviedb.org/3/tv/${movieId}/videos?api_key=${API_KEY}&language=en-US` , {next:{revalidate:10000}});
    // const trailerData = await trailer.json();
    // const officialTrailer = trailerData.results.filter((trailer) => trailer.type === 'Trailer');
    // const trailerKey = officialTrailer[0].key;
    return show;
}


const MovieDetails = async ({params: {tvShowId}}) => {
    const show = await getMovieDetails(tvShowId);
    return (
        <div className='w-3/4 mx-auto p-2 border-x-2 border-black dark:border-x-2 dark:border-white'>
            <h2 className='text-3xl'>{show.name}</h2>
            <p>First Aired In: {show.first_air_date}</p>
            <p>Episode Length: {show.episode_run_time} Min</p>
            <p>Number Of Seasons: {show.number_of_seasons}</p>
            <p>In Production? {show.in_production === true? 'Yes': 'No'}</p>
            <div className='flex'>
                <img className="h-96 shadow-sm shadow-gray-500/50" src={`https://image.tmdb.org/t/p/original/${show.backdrop_path || show.poster_path}`} alt={show.title || show.name} />
                {/* <iframe className="w-full h-96" src={`https://www.youtube.com/embed/${trailerKey}`} title={movie.title || movie.name} allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
            </div>
            <p>{show.overview}</p>
        </div>
)}

export default MovieDetails;