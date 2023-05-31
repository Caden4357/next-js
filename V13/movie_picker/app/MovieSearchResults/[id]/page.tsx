'use client'
import ViewMovie from '@/lib/OneMovie'
import React from 'react'
type Params = {
    params: {
        id: string
    }
}

export default async function page({ params: {id} }: Params) {
    const data = await ViewMovie(id);
    return (
        <div>
            {
                data?
                <div>
                    <h1 className='dark:text-white text-center'>{data.result.title}</h1>
                    <div className='flex justify-center'>
                        <img src={data.result.posterURLs.original} alt={data.result.title} className='h-80 w-80'/>
                    </div>
                    <p className='dark:text-white text-center'>{data.result.plot}</p>
                </div>:
                <h1 className='dark:text-white text-center'>Movie Not Found</h1>

            }
        </div>
    )
}
