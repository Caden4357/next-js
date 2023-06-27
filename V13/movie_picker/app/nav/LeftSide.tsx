import React from 'react'
import Link from 'next/link'
export default function LeftSide() {
    return (
        <div className='flex items-center justify-between w-6/12'>
            <h1 className='text-3xl text-center dark:text-orange-500'>Welcome To Movie Picker!</h1>
            <span className='dark:text-white'> | </span>
            <Link href='/' className='dark:text-white cursor-pointer'>
                Movies
            </Link>
            <Link href='/tvshows' className='dark:text-white'>
                TV Shows
            </Link>
            <Link href='/genres' className='dark:text-white cursor-pointer'>
                Genres
            </Link>
            <Link href='/' className='dark:text-white cursor-pointer'>
                Top 100
            </Link>
        </div>
    )
}
