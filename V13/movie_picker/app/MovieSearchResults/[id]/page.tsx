'use client'
import ViewMovie from '@/lib/OneMovie'
import React from 'react'
import Image from 'next/image'
import MovieTrailer from './MovieTrailer'
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
            <nav className='top-nav flex justify-between items-center border-b-4 border-indigo-500'>
                <div className='right'>
                    <h1 className='dark:text-white text-6xl mb-4'>{data.result.title}</h1>
                    <span className='mr-5 dark:text-white'>Released in: {data.result.year}</span>
                    <span className='dark:text-white'>Runtime: {data.result.runtime}m</span>
                </div>
                <div className='left'>
                    <div>
                        <p className='dark:text-white'>IMDb RATING</p>
                        <div className='flex gap-10'>
                            <Image src="/star.png" alt="" width={30} height={30} />
                            <p className='text-lg dark:text-white'>{data.result.imdbRating}</p>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='flex justify-between'>
                <img src={data.result.posterURLs.original} alt={data.result.title} className='w-1/5 h-2/5 ' />
                <MovieTrailer youtubeTrailerVideoLink={data.result.youtubeTrailerVideoLink} />
            </div>

        </div>
    )
}
