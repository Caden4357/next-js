'use client'
import Link from 'next/link';
import React from 'react';
import {useSearchParams} from 'next/navigation'
import NavItem from './navbarItem';

const Navbar = (props) => {
    return (
        <div className='dark:bg-slate-600 dark:text-white flex justify-center p-4 gap-10 mb-1 bg-amber-200 text-black'>
            <NavItem title='Top Rated' params='fetchTopRated'/>
            <NavItem title='Trending' params='fetchTrending'/>
        </div>
)}

export default Navbar;