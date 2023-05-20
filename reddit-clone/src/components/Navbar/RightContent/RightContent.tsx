import React from 'react';
import { Flex } from '@chakra-ui/react';
import AuthButton from './AuthButton';
type RightContentProps = {
    // user
};

const RightContent:React.FC<RightContentProps> = () => {
    
    return( 
        <>
            {/* <AuthModal/> */}
            <Flex justify={'center'} align={'center'}>
                <AuthButton/>

            </Flex>
        </>
    )
}
export default RightContent;