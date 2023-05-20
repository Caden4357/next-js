import React, { ReactElement } from 'react';
import Navbar from '../Navbar/Navbar';

interface Props {
    children: ReactElement | ReactElement[];
}

const Layout:React.FC<Props> = ({ children }: Props) => {
    
    return (
        <>
            <Navbar/>
            <main>{children}</main>
        </>
    )
}
export default Layout;
