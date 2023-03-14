import { RestaurantType } from '@/api/types';
import {
  FriendRestaurantType,
  getHomeListAPI,
  getMyReviewRestaurantListAPI,
} from '@/api/wishs';
import Loading from '@/components/common/loading';
import useMap, { MarkerType } from '@/hooks/useMap';
import { AbsoluteCenterStyled } from '@/styles/core';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

interface MapRestaurantType extends RestaurantType {
  marker: MarkerType;
}

interface MapProps {
  handleMarkerClick: (item: MapRestaurantType) => void;
}

export default function Map({ handleMarkerClick }: MapProps) {
  const { myLocation, setMaker, isLoading } = useMap();
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
    const res = await getHomeListAPI();
    console.log('res: ', res);

    const myList: MapRestaurantType[] =
      res.mylist?.map((item) => ({ ...item, marker: 'star' })) ?? [];
    const wishes: MapRestaurantType[] =
      res.wishes?.map((item) => ({ ...item, marker: 'wish' })) ?? [];
    // const follows =
    //   res.follows?.map((item) => ({ ...item, marker: 'star' })) ?? [];

    setList([...myList, ...wishes]);
  };
  useEffect(() => {
    getList();

    // 내 위치에 마커 찍기
    list.forEach((item) => {
      handleMarkerVisible(item);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myLocation]);

  return (
    <MapBox id="map">
      {isLoading && (
        <AbsoluteCenterStyled>
          <Loading />
        </AbsoluteCenterStyled>
      )}
    </MapBox>
  );
}

const MapBox = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
