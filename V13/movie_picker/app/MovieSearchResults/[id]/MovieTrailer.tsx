import React from 'react'
import dynamic from 'next/dynamic';
import './video.css'
import { title } from 'process';
type TrailerProps = {
    title: string,
    youtubeTrailerVideoLink: string,
    posterURL: string
}

export default function MovieTrailer({ youtubeTrailerVideoLink, posterURL }: TrailerProps) {

    const DynamicVideoPlayer = dynamic(() => import('react-player'), { ssr: false });

    const videoUrl = `https://www.youtube.com/embed/${youtubeTrailerVideoLink}`;
    return (
        <div className='flex justify-between'>
            <img src={posterURL} alt={title} className='w-1/5 h-2/5' />
            <DynamicVideoPlayer
                controls={true}
                url={videoUrl}
                playing={true}
                loop={true}
                width='100%'
            />
        </div>
    )
}
