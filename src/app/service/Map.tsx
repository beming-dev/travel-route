'use client';

import { useState } from 'react';
import { useEffect } from 'react';

declare global {
    interface Window {
        kakao: any;
    }
}

export default function Map() {
    const [mapLoaded, setMapLoaded] = useState<boolean>(false);

    useEffect(() => {
        const $script = document.createElement('script');
        $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=7c881dd233b642da2363002341e42932&autoload=false`;
        $script.addEventListener('load', () => setMapLoaded(true));
        document.head.appendChild($script);
    }, []);

    useEffect(() => {
        if (!mapLoaded) return;

        window.kakao.maps.load(() => {
            var container = document.getElementById('map');
            var options = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            };

            var map = new window.kakao.maps.Map(container, options);
        });
    }, [mapLoaded]);

    return <div id="map" style={{ width: '500px', height: '500px' }}></div>;
}
