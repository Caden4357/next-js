'use client'
import React, {useContext, useEffect, useState} from 'react'
import Link from 'next/link'
import '../globals.css'
import AllShows from '@/lib/TvShows'
import { ShowContext } from '../context/TvProvider' 
export default function TvShows() {
    const { shows, setShows } = useContext(ShowContext);
    const [cursor, setCursor] = useState<string>('');

    useEffect(() => {
        async function fetchData() {
            const showData = await AllShows();
            console.log("Show DATA", showData.nextCursor);
            setShows(showData.result);
            console.log("Show DATA", showData.result);

            setCursor(showData.nextCursor);
        }
        
        fetchData();
    }, []); 

    return (
        <div>
            <div className='flex gap-20 flex-wrap'>
                {
                    shows?.map((show) => (
                        <div key={show.imdbId} className='w-60 p-3 shadow-lg shadow-indigo-800'>
                        {
                            show.backdropURLs.original?
                            <Link href={`/MovieSearchResults/${show.imdbId}`}><img src={show.backdropURLs.original} alt={show.title} /></Link>:
                            null
                        }
                        <h3 className='text-black dark:text-white text-center'>{show.title}</h3>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}
