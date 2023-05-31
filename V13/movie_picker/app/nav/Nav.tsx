import React from 'react'
import useColorMode from '@/hooks/useColorMode'
import Link from 'next/link'
import SearchForm from './movieSearch/SearchForm'
import LeftSide from './LeftSide'
import RightSide from './RightSide'


export default function Nav() {
    return (
        <nav className='p-4 bg-white dark:bg-slate-900 flex justify-between border-b-2 border-black dark:border-white'>
            <LeftSide />
            <RightSide />
        </nav>
    )
}
