import SettingContainer from '@/components/join/layout/ContainerWithHeading';
import RestaurantItem from '@/components/join/restaurant/restaurant-item';
import SearchBar from '@/components/join/restaurant/search-bar';
import {
  RestaurantItemType,
  RestaurantScoreItemType,
  StepStatueProps,
} from '@/components/join/types';
import { useState } from 'react';
import styled from 'styled-components';

interface RestaurantEvaluatingProps extends StepStatueProps {}

const DUMMY = [
  {
    id: '1',
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
    src: '/assets/images/bread.png',
    score: 1,
  },
  {
    id: '2',
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
    score: 5,
  },
  {
    id: '3',
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
    score: 0,
  },
];

export default function RestaurantEvaluating({
  onNextStep,
  onPrevStep,
}: RestaurantEvaluatingProps) {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [list, setList] = useState<RestaurantScoreItemType[]>(DUMMY);
  const [selectList, setSelectList] = useState<RestaurantScoreItemType[]>([]);

  const newRestaurantAdd = (id: string, name: string, type: string) => {
    // TODO: 수정 필요
    // const restaurantKeyList = list.map(({ id }) => id);
    // if (restaurantKeyList.includes(id)) return;
    // const newRestaurant = { id, name, type, score: 0 };
    // setList([...list, newRestaurant]);
  };

  return (
    <SettingContainer
      title={'방문했던 식당을 평가해주세요.'}
      step={3}
      onPrevStep={onPrevStep}
    >
      <div>
        <SearchBar
          isSearchMode={isSearchMode}
          handleSearchMode={() => setIsSearchMode(true)}
          onAction={newRestaurantAdd}
        />
        <ListWrapper>
          {list.map((item) => (
            <RestaurantItem {...item} />
          ))}
        </ListWrapper>
      </div>
    </SettingContainer>
  );
}

const ListWrapper = styled.div`
  margin: 28px 0;
`;
