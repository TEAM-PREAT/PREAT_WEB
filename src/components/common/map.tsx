import { RestaurantType } from '@/api/types';
import { getMyReviewRestaurantListAPI } from '@/api/wishs';
import useMap, { MarkerType } from '@/hooks/useMap';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

interface MapRestaurantType extends RestaurantType {
  marker: MarkerType;
}

interface MapProps {
  handleMarkerClick: (item: MapRestaurantType) => void;
}
export default function Map({ handleMarkerClick }: MapProps) {
  const { myLocation, setMaker } = useMap();
  const [list, setList] = useState<MapRestaurantType[]>([]);

  const handleMarkerVisible = useCallback(
    (item: MapRestaurantType) => {
      setMaker({
        ...item,
        onClick: () => handleMarkerClick(item),
        markerType: item.marker,
      });
    },
    [handleMarkerClick, setMaker],
  );

  const getList = async () => {
    const res = await getMyReviewRestaurantListAPI();

    setList(res.map((item) => ({ ...item, marker: 'star' })));
  };
  useEffect(() => {
    getList();
    // 내 위치에 마커 찍기
    list.forEach((item) => {
      handleMarkerVisible(item);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myLocation]);

  return <MapBox id="map"></MapBox>;
}

const MapBox = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
