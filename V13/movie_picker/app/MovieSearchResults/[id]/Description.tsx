import React from 'react'
type Props = {
    overview: string
}

export default function Description({ overview }: Props) {
    return (
        <div className='mt-5 w-3/5'>
            <h2 className='dark:text-white text-2xl'>Description:</h2>
            <p className='dark:text-white text-xl'>{overview}</p>
        </div>
    )
}
