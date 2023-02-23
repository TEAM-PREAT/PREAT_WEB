import { useEffect, useRef, useState } from 'react';
// import pinImage from '';

const FriendIconURL = '/assets/svgs/map-friend.svg';
const StarIconURL = '/assets/svgs/map-star.svg';
const WishIconURL = '/assets/svgs/map-wish.svg';
const MarkerIconURL = '/assets/svgs/map-marker.svg';

type MarkerType = 'friend' | 'star' | 'wish' | 'marker';
const MarkerURL = {
  friend: FriendIconURL,
  star: StarIconURL,
  wish: WishIconURL,
  marker: MarkerIconURL,
};

interface SetMakerProps {
  latitude: number;
  longitude: number;
  onClick: () => void;
  markerType?: MarkerType;
}

function useMap() {
  const mapRef = useRef<HTMLElement | null | any>(null);
  // TODO : 처음에 로딩이 필요할듯
  const [myLocation, setMyLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const setMaker = ({
    latitude,
    longitude,
    markerType = 'marker',
    onClick,
  }: SetMakerProps) => {
    const currentMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: mapRef.current,
      // 원하는 이미지로 마커 커스텀
      icon: {
        url: MarkerURL[markerType],
        size: new naver.maps.Size(50, 50),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26), // NOTE:   이건 왜 넣는거지
      },
    });

    // NOTE: marker event 등록
    currentMarker.addListener('click', onClick);
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
    if (myLocation) {
      // 현재 위치 추적
      const currentPosition = [myLocation.latitude, myLocation.longitude];
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        // zoomControl: true,
      });
      // Naver Map 생성
      mapRef.current = map;
    }
  }, [myLocation]);

  return {
    myLocation,
    setMaker,
  };
}

export default useMap;
