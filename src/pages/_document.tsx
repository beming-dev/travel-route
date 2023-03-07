import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
                <Script
                    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a77bcc55c10ff3695437d27f1c29fed8&libraries=services,clusterer&autoload=false"
                    strategy="beforeInteractive"
                />
            </body>
        </Html>
    );
}
