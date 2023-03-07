import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import KakaoProvider from 'next-auth/providers/kakao';

export const authOptions: AuthOptions = {
    secret: process.env.AUTH_SECRET,
    providers: [
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID as string,
            clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 3 * 24 * 60 * 60, // 3 days
    },
};

export default NextAuth(authOptions);
