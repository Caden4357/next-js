'use client'
import ViewMovie from '@/lib/OneMovie'
import React from 'react'
import Image from 'next/image'
type Params = {
    params: {
        id: string
    }
}

export default async function page({ params: {id} }: Params) {
    const data = await ViewMovie(id);

    console.log(data);
    return (
        <div className='w-3/4 mx-auto border-2 border-indigo h-full p-5'>
            {
                // data?
                // <div className=''>
                        <div className='top-nav flex justify-between'>
                            <div className='right'>
                                <h1 className='dark:text-white text-6xl'>{data.result.title}</h1>    
                                <span className='mr-5'>{data.result.year}</span>
                                <span>{data.result.runtime}m</span>
                            </div>
                            <div className='left'>
                                <div>
                                    <p>IMDb RATING</p>
                                    <div className='flex gap-10'>
                                        <Image src="/star.png" alt="" width={30} height={30} />
                                        <p className='text-lg'>{data.result.imdbRating}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                //     <div className='flex justify-start'>
                //         <img src={data.result.posterURLs.original} alt={data.result.title} className='h-80 w-80'/>
                //     </div>
                //     <p className='dark:text-white mx-auto w-80'>{data.result.overview}</p>
                //     <h2 className='dark:text-white mx-auto w-80 text-2xl'>Streaming on: </h2>
                //     {
                //         data.result.streamingInfo.us?
                //         Object.keys(data.result.streamingInfo.us).map((key) => (
                //             <p key={key} className='dark:text-white mx-auto w-80'>{key}</p>
                //         )):
                //         <h3 className='dark:text-white mx-auto w-80'>We cant find this streaming anywhere :(</h3>
                //     }
                // </div>:
                // <h1 className='dark:text-white text-center'>Movie Not Found</h1>

            }
        </div>
    )
}
