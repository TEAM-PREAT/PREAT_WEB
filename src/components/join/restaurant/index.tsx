import { getRestaurantsAPI, JoinRestaurantType } from '@/api/join-setting';
import { RestaurantType } from '@/api/wishs';
import SettingContainer from '@/components/join/layout/ContainerWithHeading';
import OverlayLogo from '@/components/join/restaurant/overlay-logo';
import RestaurantList from '@/components/join/restaurant/restaurant-list';
import SearchBar from '@/components/join/restaurant/search-bar';
import useOverlayLogo from '@/components/join/restaurant/useOverlayLogo';
import { ReviewType, StepStatueProps } from '@/components/join/types';
import { useEffect, useMemo, useState } from 'react';

interface RestaurantEvaluatingProps extends StepStatueProps {
  onNextStep: (reviews: ReviewType[]) => void;
}

export default function RestaurantEvaluating({
  onNextStep,
  onPrevStep,
}: RestaurantEvaluatingProps) {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const { isVisibleLogo, handleVisibleLogo } = useOverlayLogo(2500);
  const [list, setList] = useState<JoinRestaurantType[]>([]);

  const reviewList: ReviewType[] = useMemo(
    () =>
      list.map(({ id, rating }) => ({
        restaurantId: id,
        rating: rating,
      })),
    [list],
  );

  const isButtonDisabled = reviewList.length < 2;

  const newRestaurantAdd = (obj: RestaurantType) => {
    console.log('obj: ', obj);
    const restaurantKeyList = list.map(({ id }) => id);
    if (restaurantKeyList.includes(obj.id)) {
      alert('이미 선택된 식당입니다. ');
      return;
    }

    const newRestaurant = { ...obj, rating: 0 };
    setList([...list, newRestaurant]);
    setIsSearchMode(false);
    handleVisibleLogo();
  };

  const handleReview = (newReviewId: number, rating: number) => {
    const newList = list.map((item) => {
      if (item.id !== newReviewId) return item;
      return { ...item, rating };
    });
    setList(newList);
  };

  const onButtonClick = () => {
    onNextStep(reviewList);
  };

  const getRestaurants = async () => {
    const data = await getRestaurantsAPI();
    console.log('data: ', data);
    setList(data);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <SettingContainer
      title={'방문했던 식당을 평가해주세요.'}
      step={3}
      onPrevStep={onPrevStep}
      isButtonDisabled={isButtonDisabled || isSearchMode}
      onButtonClick={onButtonClick}
    >
      <div>
        <SearchBar
          isSearchMode={isSearchMode}
          searchModeOn={() => setIsSearchMode(true)}
          searchModeOff={() => setIsSearchMode(false)}
          onAction={newRestaurantAdd}
        />
        {!isSearchMode && (
          <RestaurantList list={list} handleReview={handleReview} />
        )}
      </div>
      {isVisibleLogo && <OverlayLogo />}
    </SettingContainer>
  );
}
