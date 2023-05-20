import React from 'react';
import { Button } from '@chakra-ui/react';

const AuthButton:React.FC = () => {
    
    return (
        <>
            <Button variant={'outline'}>Login</Button>
            <Button>Sign Up</Button>
        </>
    )
}
export default AuthButton;