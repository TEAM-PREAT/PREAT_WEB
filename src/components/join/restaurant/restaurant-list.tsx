import { JoinRestaurantType } from '@/api/join-setting';
import ReviewRestaurantItem from '@/components/common/restaurant-item/review-restaurant-item';
import styled from 'styled-components';

interface RestaurantListProps {
  list: JoinRestaurantType[];
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
