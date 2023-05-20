import React from 'react'
import { Button, Flex, Heading, Input } from '@chakra-ui/react'

const Login = () => {
    return (
        <Flex height={'100vh'} justify={'center'} align={'center'}>
            <Flex direction={'column'} backgroundColor={'gray.400'} p={10}>
                <Heading color='blue.500' textAlign={'center'} mb={6}>Login</Heading>
                <Input type="text" placeholder='email@email.com' mb={6} backgroundColor={'gray.500'} color={'white'} />
                <Input type="password" placeholder='********' mb={6} backgroundColor={'gray.500'} color={'white'} />
                <Button colorScheme='blue'>Login</Button>
            </Flex>
        </Flex>
    )
}

export default Login