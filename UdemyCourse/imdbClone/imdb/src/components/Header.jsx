import React from 'react';
import MenuItem from './MenuItem';
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
const Header = (props) => {
    return (
        <nav className='flex items-center justify-between py-6 mx-2 max-w-6xl sm:mx-auto'>
            <div className='flex'>
                <MenuItem title="Movies" address="/about" Icon={BsFillInfoCircleFill} style={'text-amber-600 font-bold'}/>
                <MenuItem title="TV" address="/about" Icon={BsFillInfoCircleFill} style={'text-amber-600 '}/>
                <MenuItem title="Home" address="/" Icon={AiFillHome}/>
                <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill}/>
            </div>
            <div className='flex items-center gap-4'>
                <DarkModeToggle />
                <Link href='/'>
                    <h2 className='text-2xl'>
                        <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span>
                        <span className='text-xl hidden sm:inline'>Clone</span>
                    </h2>
                </Link>
            </div>
        </nav>
)}

export default Header;