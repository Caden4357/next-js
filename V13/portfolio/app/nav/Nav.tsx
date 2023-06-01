import React from 'react'
import './Nav.css'
import Link from 'next/link'
import MobileNav from './MobileNav'
export default function Nav() {


    return (
        <nav className='d-flex jc-evenly ai-center'>
            <h2>Caden Wilcox!</h2>
            <div className='d-flex jc-end ai-center gap nav-links'>
                <Link href='/myInfo'>Home</Link>
                <Link href='/projects'>Projects</Link>
                <Link target="_blank" href='https://www.linkedin.com/in/caden-wilcox-python/'>Linked In</Link>
                <Link target="_blank" href='https://github.com/Caden4357'>GitHub</Link>
            </div>
            <MobileNav/>
        </nav>
    )
}
