import React from 'react'
import './css/Nav.css'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'
export default function Nav() {


    return (
        <nav className='d-flex jc-center ai-center'>
            <div className='d-flex jc-center ai-center gap nav-links'>
                {/* <h2>Hire Me!</h2> */}
                <Link href='/myInfo'>Home</Link>
                <Link target="_blank" href='https://www.linkedin.com/in/caden-wilcox-python/'>Linked In</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='#'>About Me</Link>
            </div>
            <MobileNav/>
        </nav>
    )
}
