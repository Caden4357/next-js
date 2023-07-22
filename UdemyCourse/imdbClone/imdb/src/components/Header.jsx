import React from 'react';
import MenuItem from './MenuItem';
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';
const Header = (props) => {
    return (
        <nav>
            <div className='flex'>
                <MenuItem title="Home" address="/" Icon={AiFillHome}/>
                <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill}/>

            </div>
            <div>

            </div>
        </nav>
)}

export default Header;