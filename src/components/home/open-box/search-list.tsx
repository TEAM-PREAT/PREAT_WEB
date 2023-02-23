import styled from 'styled-components';
import { RestaurantType } from '@/api/types';
import { restaurantReviewCreate, restaurantReviewUpdate } from '@/api/reviews';
import EvaluationScore from '@/components/common/evaluation-score';
import {
  RestaurantItemWrapper,
  ImageWrapper,
  RightWrapper,
  TextWrapper,
  Name,
  Type,
  StarListWrapper,
  Location,
} from '@/components/common/restaurant-item/styled';
import Image from 'next/image';

interface SearchListProps {
  list: RestaurantType[];
  onClose: () => void;
}

export default function SearchList({ list, onClose }: SearchListProps) {
  const handleReview = async (
    restaurantId: number,
    rating: number,
    hasPredict: boolean,
  ) => {
    if (hasPredict) {
      await restaurantReviewCreate(restaurantId, rating);
    } else {
      await restaurantReviewUpdate(restaurantId, rating);
    }
    onClose();
  };

  return (
    <ListWrapper>
      {list.map((item) => (
        <HomeSearchReviewRestaurantItem
          key={item.id}
          {...item}
          handleReview={handleReview}
        />
      ))}
    </ListWrapper>
  );
}

// NOTE: 겹치는거 넘 시러 ㅜㅜ (ReviewRestaurantItem)
interface RestaurantItemProps extends RestaurantType {
  handleReview?: (id: number, rating: number, hasPredict: boolean) => void;
}

function HomeSearchReviewRestaurantItem({
  imageUrl,
  category,
  address,
  name,
  rating,
  id,
  handleReview,
}: RestaurantItemProps) {
  const onReview = (newRating: number) => {
    const { hasPredict } = rating;

    handleReview && handleReview(id, newRating, hasPredict);
  };

  return (
    <RestaurantItemWrapper>
      <ImageWrapper>
        {imageUrl && <Image src={imageUrl} alt={name} width={92} height={92} />}
      </ImageWrapper>
      <RightWrapper>
        <TextWrapper>
          <Name>{name}</Name>
          <Type>{category}</Type>
        </TextWrapper>

        <Location>{address}</Location>
        <StarListWrapper>
          <EvaluationScore
            score={rating.hasPredict ? 0 : rating.value}
            onReview={onReview}
          />
        </StarListWrapper>
      </RightWrapper>
    </RestaurantItemWrapper>
  );
}

const ListWrapper = styled.div`
  margin-top: 20px;
`;
