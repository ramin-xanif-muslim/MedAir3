import { Center } from '@chakra-ui/react';
import React from 'react';

const Version = () => {
    return (
        <Center
            fontSize='10px'
            _hover={{ color: "white" }}
            cursor="pointer"
        >
            V1.0.1
        </Center>
    );
};

export default Version;