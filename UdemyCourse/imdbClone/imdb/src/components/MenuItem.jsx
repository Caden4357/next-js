import React from 'react';
import Link from 'next/link';
const MenuItem = ({title, address, Icon }) => {
    return (
        <div>
            <Link href={address} className='hover:text-amber-500 ms-9 '>
                <Icon className='sm:hidden text-2xl'/>
                <p className='text-4xl hidden sm:inline'>{title}</p>

            </Link>
        </div>
)}

export default MenuItem;