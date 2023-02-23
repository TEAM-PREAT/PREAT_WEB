import { restaurantReviewCreate, restaurantReviewUpdate } from '@/api/reviews';
import { RestaurantType } from '@/api/types';
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
import { ItemListWrapper } from '@/components/home/open-box/step-styled';
import Image from 'next/image';

interface MyListProps {
  list: RestaurantType[];
  isFullPage?: boolean;
}

export default function MyList({ list, isFullPage }: MyListProps) {
  const handleReview = async (restaurantId: number, rating: number) => {
    await restaurantReviewUpdate(restaurantId, rating);
  };

  return (
    <ItemListWrapper isFullPage={isFullPage}>
      {list.map((item) => (
        <ReviewRestaurantItem
          key={item.id}
          {...item}
          handleReview={handleReview}
        />
      ))}
    </ItemListWrapper>
  );
}

interface RestaurantItemProps extends RestaurantType {
  handleReview?: (id: number, rating: number) => void;
}

// NOTE: 겹치는거 넘 시러 ㅜㅜ
function ReviewRestaurantItem({
  imageUrl,
  category,
  address,
  name,
  rating,
  id,
  handleReview,
}: RestaurantItemProps) {
  const onReview = (rating: number) => {
    handleReview && handleReview(id, rating);
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
