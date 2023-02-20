import useMap from '@/hooks/useMap';
import styled from 'styled-components';

export default function Map() {
  useMap();

  return <MapBox id="map"></MapBox>;
}

const MapBox = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
