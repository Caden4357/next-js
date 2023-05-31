import React from 'react'

export default function SearchLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='p-3 border-2 border-black dark:border-white flex justify-end'>
            {children}
        </div>
    )
}
