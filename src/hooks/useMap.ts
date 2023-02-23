import { useEffect, useRef, useState } from 'react';
// import pinImage from '';
function useMap() {
  const mapRef = useRef<HTMLElement | null | any>(null);
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >('');

  const setMaker = (latitude: number, longitude: number) => {
    const currentMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: mapRef.current,
      // 원하는 이미지로 마커 커스텀
      icon: {
        url: '/assets/svgs/logo.svg',
        size: new naver.maps.Size(50, 52),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26),
      },
    });
  };
  useEffect(() => {
    // geolocation 이용 현재 위치 확인, 위치 미동의 시 기본 위치로 지정
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
      setMyLocation({ latitude: 37.4862618, longitude: 127.1222903 });
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== 'string') {
      // 현재 위치 추적
      const currentPosition = [myLocation.latitude, myLocation.longitude];
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        // zoomControl: true,
      });
      // Naver Map 생성
      mapRef.current = map;

      setMaker(currentPosition[0], currentPosition[1]);
    }
  }, [myLocation]);

  return {
    myLocation,
  };
}

export default useMap;
