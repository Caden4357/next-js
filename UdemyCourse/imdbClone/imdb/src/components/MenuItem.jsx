import React from 'react';
import Link from 'next/link';
const MenuItem = ({ title, address, Icon, style }) => {
    return (
        <Link href={address} className='hover:text-amber-500 mr-6'>
            <Icon className='sm:hidden text-2xl' />
            <p className={`text-4xl hidden sm:inline ${style}`}>{title}</p>

        </Link>
    )
}

export default MenuItem;