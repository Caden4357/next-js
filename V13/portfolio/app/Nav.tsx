import React from 'react'
import './css/Nav.css'
import Link from 'next/link'
export default function Nav() {
    return (
        <nav className='d-flex jc-center ai-center gap'>
            <h2>Hire Me!</h2>
            <Link href='/myInfo'>Home</Link>
            <Link href='https://www.linkedin.com/in/caden-wilcox-python/'>Linked In</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='#'>About Me</Link>
        </nav>
    )
}
