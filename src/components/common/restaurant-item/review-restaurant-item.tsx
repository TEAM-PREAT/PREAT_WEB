import { JoinRestaurantType } from '@/api/join-setting';
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

interface RestaurantItemProps extends JoinRestaurantType {
  handleReview?: (id: number, rating: number) => void;
}

export default function ReviewRestaurantItem({
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
          <EvaluationScore score={rating} onReview={onReview} />
        </StarListWrapper>
      </RightWrapper>
    </RestaurantItemWrapper>
  );
}
