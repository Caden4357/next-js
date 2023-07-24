'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const NavItem = ({ title, params }) => {
    const pathname = usePathname();
    console.log(pathname, params);
    return (
        <>
            <Link href={params} className={pathname === params? 'hover:text-amber-500 text-lg underline underline-offset-8 decoration-4 decoration-amber-500': 'hover:text-amber-500 text-lg'}>
                {title}
            </Link>
        </>
    )
}

export default NavItem;