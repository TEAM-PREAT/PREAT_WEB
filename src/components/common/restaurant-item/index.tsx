import EvaluationScore from '@/components/common/evaluation-score';
import {
  Wrapper,
  ImageWrapper,
  RightWrapper,
  TextWrapper,
  Name,
  Type,
  StarListWrapper,
  Location,
} from '@/components/common/restaurant-item/styled';
import { RestaurantScoreItemType } from '@/components/join/types';
import Image from 'next/image';

interface RestaurantItemProps extends RestaurantScoreItemType {
  handleReview?: (id: number, score: number) => void;
}

export default function RestaurantItem({
  src,
  type,
  location,
  name,
  score,
  id,
  handleReview,
}: RestaurantItemProps) {
  const onReview = (score: number) => {
    handleReview && handleReview(id, score);
  };

  return (
    <Wrapper>
      <ImageWrapper>
        {src && <Image src={src} alt={name} width={92} height={92} />}
      </ImageWrapper>
      <RightWrapper>
        <TextWrapper>
          <Name>{name}</Name>
          <Type>{type}</Type>
        </TextWrapper>

        <Location>{location}</Location>
        <StarListWrapper>
          <EvaluationScore score={score} onReview={onReview} />
        </StarListWrapper>
      </RightWrapper>
    </Wrapper>
  );
}
