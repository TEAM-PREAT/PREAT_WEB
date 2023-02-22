import { RestaurantType } from '@/api/wishs';
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
import Image from 'next/image';

type SelectRestaurantItemProps = RestaurantType;

export default function RestaurantItem({
  imageUrl,
  category,
  name,
  rating,
  address,
}: SelectRestaurantItemProps) {
  return (
    <Wrapper>
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
          <EvaluationScore score={rating.value} />
        </StarListWrapper>
      </RightWrapper>
    </Wrapper>
  );
}
