import React from 'react';

const MovieDetails = ({params: {movieId}}) => {
    console.log(movieId);
    return (
        <div>
            Movie Details
            <br />
            {movieId}
        </div>
)}

export default MovieDetails;