import React from 'react'
import Image from 'next/image'

type MovieProps = {
    title: string,
    year: number,
    runtime: number,
    imdbRating: number
}

export default function MovieNav({ title, year, runtime, imdbRating }: MovieProps) {
    return (
        <nav className='top-nav flex justify-between items-center border-b-4 border-indigo-500 mb-5'>
            <div className='right'>
                <h1 className='dark:text-white text-6xl mb-4'>{title}</h1>
                <span className='mr-5 dark:text-white'>Released in: {year}</span>
                <span className='dark:text-white'>Runtime: {runtime}m</span>
            </div>
            <div className='left'>
                <div>
                    <p className='dark:text-white'>IMDb RATING</p>
                    <div className='flex gap-10'>
                        <Image src="/star.png" alt="" width={30} height={30} />
                        <p className='text-lg dark:text-white'>{imdbRating}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
