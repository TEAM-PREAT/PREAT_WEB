import SettingContainer from '@/components/join/layout/ContainerWithHeading';
import SearchBar from '@/components/join/restaurant/search-bar';
import { useState } from 'react';

interface RestaurantItemType {
  key: string;
  title: string;
  desc: string;
  score: number;
  src?: string;
}

export default function RestaurantEvaluating() {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [list, setList] = useState<RestaurantItemType[]>([]);
  const [selectList, setSelectList] = useState<RestaurantItemType[]>([]);

  const newRestaurantAdd = (key: string, title: string, desc: string) => {
    const restaurantKeyList = list.map(({ key }) => key);
    if (restaurantKeyList.includes(key)) return;

    const newRestaurant = { key, title, desc, score: 0 };

    setList([...list, newRestaurant]);
  };

  return (
    <SettingContainer title={'방문했던 식당을 평가해주세요.'} step={3}>
      <SearchBar
        isSearchMode={isSearchMode}
        handleSearchMode={() => setIsSearchMode(true)}
        onAction={newRestaurantAdd}
      />
    </SettingContainer>
  );
}
