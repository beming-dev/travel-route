'use client';

import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import Map from './Map';

export default function Page() {
    return (
        <Flex w="100vw" h="100vh" align="center" justify="center">
            <Box>
                <Map></Map>
                <Button onClick={() => signOut({ callbackUrl: '/' })}>
                    로그아웃
                </Button>
            </Box>
        </Flex>
    );
}
