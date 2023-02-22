import ReviewRestaurantItem from '@/components/common/restaurant-item/review-restaurant-item';
import { RestaurantScoreItemType } from '@/components/join/types';
import styled from 'styled-components';

interface RestaurantListProps {
  list: RestaurantScoreItemType[];
  handleReview: (id: number, score: number) => void;
}

export default function RestaurantList({
  list,
  handleReview,
}: RestaurantListProps) {
  return (
    <ListWrapper>
      {list.map((item) => (
        <ReviewRestaurantItem
          key={item.id}
          {...item}
          handleReview={handleReview}
        />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  margin: 28px 0;
`;
