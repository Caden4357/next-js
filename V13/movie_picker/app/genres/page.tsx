'use client'
// import GetGenres from '@/lib/GetGenres'
import React, {useState} from 'react'

type Genre = {
    genre:string,
}
type GenreData = {
    genres:Genre[],
}

export default async function page() {
    // const genreData: Promise<GenreData[]> = GetGenres()
    // const genres = await genreData
    // console.log("##########", genres);
    return (
        <div>
            <h1>Genres</h1>
            {/* {
                genres.map((genre, index) => {
                    return (
                        <div key={index}>
                            <p>{genre.genres}</p>
                        </div>
                    )
                }
            )
            } */}
        </div>
    )
}
