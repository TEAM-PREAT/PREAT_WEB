import useMap from '@/hooks/useMap';
import { useEffect } from 'react';
import styled from 'styled-components';

export default function Map() {
  const { myLocation, setMaker } = useMap();

  useEffect(() => {
    // 내 위치에 마커 찍기
    setMaker(myLocation);
  }, [myLocation, setMaker]);

  return <MapBox id="map"></MapBox>;
}

const MapBox = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
