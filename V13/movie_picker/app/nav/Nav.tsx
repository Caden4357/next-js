'use client'
import React from 'react'
import useColorMode from '@/hooks/useColorMode'
import Link from 'next/link'
import SearchForm from './movieSearch/SearchForm'


export default function Nav() {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <nav className='p-4 bg-white dark:bg-slate-900 flex justify-between border-b-2 border-black dark:border-white'>
            <div className='flex items-center justify-between w-6/12'>
                <h1 className='text-3xl text-center dark:text-orange-500'>Welcome To Movie Picker!</h1>
                <span className='dark:text-white'> | </span>
                <Link href='/' className='dark:text-white'>
                    Movies
                </Link>
                <Link href='/' className='dark:text-white'>
                    TV Shows
                </Link>
                <Link href='/' className='dark:text-white'>
                    Genres
                </Link>
                <Link href='/' className='dark:text-white'>
                    Top 100
                </Link>
            </div>
            <div className='flex items-center justify-evenly w-6/12'>
                <SearchForm />
                <button className='p-2 bg-black dark:bg-sky-600 text-white justify-self-end'
                    onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
                >
                    Toggle dark mode
                </button>
            </div>
        </nav>
    )
}
