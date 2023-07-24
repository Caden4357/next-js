'use client'
import Link from 'next/link';
import React from 'react';
import {useSearchParams} from 'next/navigation'
import NavItem from './navbarItem';

const Navbar = (props) => {
    return (
        <div className='dark:bg-slate-600 dark:text-white flex justify-center p-4 gap-10 mb-1 bg-gray-200 text-black'>
            <NavItem title='Top Rated' params='/topRated'/>
            <NavItem title='Trending' params='/trending'/>
        </div>
)}

export default Navbar;