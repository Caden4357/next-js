import React from 'react'

export default function SearchForm() {
    return (
        <form className='w-6/12'>
            <input type="text" placeholder="Search for a movie" className='p-1 w-80'/>
            <button type="submit" className='dark:bg-sky-600 p-1'>Search</button>
        </form>
    )
}
