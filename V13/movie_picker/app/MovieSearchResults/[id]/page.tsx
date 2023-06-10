'use client'
import ViewMovie from '@/lib/OneMovie'
import React, { Suspense } from 'react'
import Image from 'next/image'
import MovieTrailer from './MovieTrailer'
import MovieNav from './MovieNav'
import Cast from './Cast'
import StreamingInfo from './StreamingInfo'
type Params = {
    params: {
        id: string
    }
}


export default async function page({ params: { id } }: Params) {
    const data = await ViewMovie(id);
    console.log(data);
    return (
        <div className='w-3/4 mx-auto border-2 border-indigo h-full p-5'>
            <MovieNav 
            title={data.result.title} 
            year={data.result.year} 
            runtime={data.result.runtime} 
            imdbRating={data.result.imdbRating} 
            />
            <Suspense 
                fallback={<h1 className='text-8xl text-center dark:text-white'>Loading...</h1>}>
                <MovieTrailer 
                title={data.result.title}
                youtubeTrailerVideoLink={data.result.youtubeTrailerVideoLink} 
                posterURL={data.result.posterURLs.original}
                />
            </Suspense>
            <div className='w-1/5 flex justify-between border-2 border-indigo'>
                <Cast 
                    cast={data.result.cast} 
                />
                <StreamingInfo 
                    streamingInfo={data.result.streamingInfo} 
                />

            </div>
            
        </div>
    )
}
