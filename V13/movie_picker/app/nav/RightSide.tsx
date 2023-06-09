'use client'
import React from 'react'
import SearchForm from './movieSearch/SearchForm'
import useColorMode from '@/hooks/useColorMode'
export default function RightSide() {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <div className='flex items-center justify-evenly w-6/12'>
            <SearchForm />
            {/* <button className='p-2 bg-black dark:bg-sky-600 text-white justify-self-end'
                onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
            >
            </button> */}
            <img src='dark-mode.png' alt="" className='w-10' onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}/>
        </div>
    )
}
