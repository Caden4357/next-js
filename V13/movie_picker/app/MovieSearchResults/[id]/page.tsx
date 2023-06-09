'use client'
import ViewMovie from '@/lib/OneMovie'
import React, { Suspense } from 'react'
import Image from 'next/image'
import MovieTrailer from './MovieTrailer'
import MovieNav from './MovieNav'
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
            <MovieNav title={data.result.title} year={data.result.year} runtime={data.result.runtime} imdbRating={data.result.imdbRating} />
            <div className='flex justify-between'>
                <img src={data.result.posterURLs.original} alt={data.result.title} className='w-1/5 h-2/5' />
                <Suspense fallback={<h1 className='text-8xl text-center dark:text-white'>Loading...</h1>}>
                    <MovieTrailer youtubeTrailerVideoLink={data.result.youtubeTrailerVideoLink} />
                </Suspense>
            </div>

        </div>
    )
}
