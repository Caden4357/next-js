import React from 'react'
import dynamic from 'next/dynamic';
import './video.css'
type TrailerProps = {
    youtubeTrailerVideoLink: string
}

export default function MovieTrailer({ youtubeTrailerVideoLink }: TrailerProps) {

    const DynamicVideoPlayer = dynamic(() => import('react-player'), { ssr: false });

    const videoUrl = `https://www.youtube.com/embed/${youtubeTrailerVideoLink}`;
    return (
        <div className='video-container'>
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
