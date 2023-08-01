const API_KEY = process.env.API_KEY;
import React from 'react';


const getMovieDetails = async (movieId) => {
    // * Get Movie Details
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US` , {next:{revalidate:10000}});
    const movie = await res.json();
    // * Get Movie Trailer
    const trailer = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US` , {next:{revalidate:10000}});
    const trailerData = await trailer.json();
    const officialTrailer = trailerData.results.filter((trailer) => trailer.type === 'Trailer');
    const trailerKey = officialTrailer[0].key;

    // * Get Movie Cast
    const cast = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US` , {next:{revalidate:10000}});
    const castData = await cast.json();
    const castMembers = castData.cast.slice(0, 10);

    // Get streaming services
    const streaming = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${API_KEY}` , {next:{revalidate:10000}});
    const streamingData = await streaming.json();
    console.log(streamingData.results.US);
    return {movie, trailerKey ,castMembers};
}


const MovieDetails = async ({params: {movieId}}) => {
    const {movie, trailerKey, castMembers} = await getMovieDetails(movieId);
    return (
        <div className='w-3/4 mx-auto p-2 border-x-2 border-black dark:border-x-2 dark:border-white'>
            <h2 className='text-3xl'>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
            <p>Runtime: {movie.runtime} Min</p>
            <p><img src='/imdb-logo.png'alt="IMDb orange rating logo" className='w-10 inline'/> : {movie.vote_average.toFixed(1)}</p>
            <div className='flex'>
                <img className="h-96 shadow-sm shadow-gray-500/50" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} alt={movie.title || movie.name} />
                <iframe className="w-full h-96" src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`} title={movie.title || movie.name} allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <p>{movie.overview}</p>
            <h2 className='text-3xl text-center my-10'>Cast:</h2>
            <div className='flex justify-between flex-wrap w-2/4 mx-auto'>
                {
                    castMembers.map((cast) => (
                        <div className='flex flex-col items-center'>
                            <img className='w-32 h-32 rounded-full' src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt={cast.name} />
                            <p>{cast.name}</p>
                            <p>{cast.character}</p>

                        </div>
                    ))
                }
            </div>
        </div>
)}

export default MovieDetails;