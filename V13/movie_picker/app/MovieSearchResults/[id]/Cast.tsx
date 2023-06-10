import { type } from 'os'
import React from 'react'

type CastProps = {
    cast: []
}

export default function Cast({ cast }: CastProps) {
    console.log(cast);
    return (
        <div>
            <h2 className='dark:text-white'>Staring:</h2>
            {
                cast.map((actor: any) => (
                    <p className='dark:text-white'>{actor}</p>
                ))
            }
        </div>
    )
}
