'use client';

import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Button } from '@chakra-ui/button';
import { Box, Flex } from '@chakra-ui/react';
import { getServerSession } from 'next-auth';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) router.push('/service');
    }, [session]);

    const onLogin = () => {
        signIn('kakao', {
            callbackUrl: '/',
        });
    };

    return (
        <Flex w="100vw" h="100vh" align="center" justify="center">
            <Box>
                <Button onClick={onLogin}>로그인</Button>
            </Box>
        </Flex>
    );
}
