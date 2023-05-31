import React from 'react'
import batman from '../../public/batman.jpg'


export default function HeroImage() {
    return (
        <img src={batman.src} alt="main movie logo" className="mx-auto h-3/5 w-2/5" />
    )
}
