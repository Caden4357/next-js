'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MobileNav() {
    const [menu, setMenu] = useState(false);

    const handleMobileNav = () => {
        setMenu(!menu);
    }
    return (
        <>
            <Image className='menu-burger-img' src="/menu-burger.png" alt="" width={36} height={36} onClick={handleMobileNav}/>
            <div className={menu? "nav-burger": "non-active-nav"}>
                <Link onClick={handleMobileNav} href='/myInfo'>Home</Link>
                <Link onClick={handleMobileNav} target="_blank" href='https://www.linkedin.com/in/caden-wilcox-python/'>Linked In</Link>
                <Link onClick={handleMobileNav} href='/projects'>Projects</Link>
                <Link onClick={handleMobileNav} href='#'>About Me</Link>
            </div>
        </>
    )
}
