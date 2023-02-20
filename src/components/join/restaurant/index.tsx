import SettingContainer from '@/components/join/layout/ContainerWithHeading';
import RestaurantItem from '@/components/join/restaurant/restaurant-item';
import RestaurantList from '@/components/join/restaurant/restaurant-list';
import SearchBar from '@/components/join/restaurant/search-bar';
import {
  RestaurantItemType,
  RestaurantScoreItemType,
  ReviewType,
  StepStatueProps,
} from '@/components/join/types';
import { useState } from 'react';
import styled from 'styled-components';

interface RestaurantEvaluatingProps extends StepStatueProps {}

const DUMMY: RestaurantScoreItemType[] = [
  {
    id: 1,
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
    src: '/assets/images/bread.png',
    score: 1,
  },
  {
    id: 2,
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
    score: 5,
  },
  {
    id: 3,
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

  const newRestaurantAdd = (obj: RestaurantItemType) => {
    const restaurantKeyList = list.map(({ id }) => id);
    if (restaurantKeyList.includes(obj.id)) {
      alert('이미 선택된 식당입니다. ');
      return;
    }

    const newRestaurant = { ...obj, score: 0 };
    setList([...list, newRestaurant]);
    setIsSearchMode(false);
  };

  const handleReview = (newReviewId: number, score: number) => {
    const newList = list.map((item) => {
      if (item.id !== newReviewId) return item;
      return { ...item, score };
    });
    setList(newList);
  };

  const onButtonClick = () => {};
  return (
    <SettingContainer
      title={'방문했던 식당을 평가해주세요.'}
      step={3}
      onPrevStep={onPrevStep}
      isButtonDisabled={false}
      onButtonClick={onButtonClick}
    >
      <div>
        <SearchBar
          isSearchMode={isSearchMode}
          handleSearchMode={() => setIsSearchMode(true)}
          onAction={newRestaurantAdd}
        />
        {!isSearchMode && (
          <RestaurantList list={list} handleReview={handleReview} />
        )}
      </div>
    </SettingContainer>
  );
}
