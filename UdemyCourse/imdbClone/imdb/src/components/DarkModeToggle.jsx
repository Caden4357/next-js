'use client'
import React, {useEffect, useState} from 'react';
import {MdDarkMode} from 'react-icons/md';
import {BsSun} from 'react-icons/bs';
import { useTheme } from 'next-themes';
const DarkModeToggle = (props) => {
    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
        <>
        {
            mounted && (currentTheme === 'dark' ?
            <button onClick={() => setTheme('light')} className='cursor hover:text-amber-500'>
                <BsSun size={32}/>
            </button>
            :
            <button onClick={() => setTheme('dark')} className='cursor hover:text-amber-500'>
                <MdDarkMode size={32}/>
            </button>

        )}
        </>
)}

export default DarkModeToggle;