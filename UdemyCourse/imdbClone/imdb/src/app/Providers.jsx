'use client'
import { ThemeProvider } from 'next-themes';
import React from 'react';

const Providers = ({ children }) => {
    return (
        <ThemeProvider enableSystem={true} attribute='class'>
            <div className='dark:bg-slate-800 dark:text-gray-200 text-gray-700 transition-colors duration-500 min-h-screen'>
                {children}
            </div>
        </ThemeProvider>
    )
}

export default Providers;