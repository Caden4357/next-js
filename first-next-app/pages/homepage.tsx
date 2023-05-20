import React from 'react'
import Image from 'next/image'
export default function Homepage() {
    return (
        <Image
            src={'/images/bg-image.jpeg'}
            height={500}
            width={500}
            alt='bg-image'
        />
    )
}
