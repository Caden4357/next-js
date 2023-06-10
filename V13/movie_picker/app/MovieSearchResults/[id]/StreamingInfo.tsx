import React from 'react'
type StreamingInfoProps = {
    streamingInfo: {us:{
        apple:boolean,
        netflix: boolean,
        hulu: boolean,
        disney: boolean,
        prime: boolean
    }}
}


export default function StreamingInfo({ streamingInfo }: StreamingInfoProps) {
    console.log(streamingInfo);
    if(streamingInfo.us) {
        return (
            <div>
                <h2 className='dark:text-white'>Streaming On:</h2>
                <p className='dark:text-white'>AppleTV: {streamingInfo.us.apple ? 'Yes' : 'No'}</p>
                <p className='dark:text-white'>Netflix: {streamingInfo.us.netflix ? 'Yes' : 'No'}</p>
                <p className='dark:text-white'>Hulu: {streamingInfo.us.hulu ? 'Yes' : 'No'}</p>
                <p className='dark:text-white'>Prime Video: {streamingInfo.us.prime ? 'Yes' : 'No'}</p>
                <p className='dark:text-white'>Disney+: {streamingInfo.us.disney ? 'Yes' : 'No'}</p>
            </div>
        )
    }else{
        return (
            <div>
                No streaming info available
            </div>
        )

    }
}
