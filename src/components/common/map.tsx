import { RestaurantType } from '@/api/types';
import { getMyReviewRestaurantListAPI } from '@/api/wishs';
import useMap from '@/hooks/useMap';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Map() {
  const { myLocation, setMaker } = useMap();
  const [list, setList] = useState<RestaurantType[]>([]);

  const handleMarkerVisible = useCallback(
    (item: RestaurantType) => {
      setMaker({ ...item, onClick: () => handleMarkerClick(item.id) });
    },
    [setMaker],
  );

  const handleMarkerClick = (id: number) => {
    // TODO : 구현
    console.log('handleMarkerClick: ', id);
  };

  const getList = async () => {
    const res = await getMyReviewRestaurantListAPI();
    setList(res);
  };
  useEffect(() => {
    getList();
    // 내 위치에 마커 찍기
    list.forEach((item) => {
      handleMarkerVisible(item);
    });
  }, [handleMarkerVisible, list, myLocation]);

  return <MapBox id="map"></MapBox>;
}

const MapBox = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
