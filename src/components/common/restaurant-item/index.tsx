import { RestaurantType } from '@/api/wishs';
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

type SelectRestaurantItemProps = RestaurantType;

export default function RestaurantItem({
  imageUrl,
  category,
  name,
  rating,
  address,
}: SelectRestaurantItemProps) {
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
          <EvaluationScore score={rating.hasPredict ? 0 : rating.value} />
        </StarListWrapper>
      </RightWrapper>
    </RestaurantItemWrapper>
  );
}
