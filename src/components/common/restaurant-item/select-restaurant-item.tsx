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
import styled from 'styled-components';

interface SelectRestaurantItemProps extends RestaurantType {
  checked: boolean;
  toggleCheck: () => void;
}

export default function SelectRestaurantItem({
  imageUrl,
  category,
  checked,
  name,
  rating,
  toggleCheck,
  address,
}: SelectRestaurantItemProps) {
  return (
    <RestaurantItemWrapper>
      <CheckWrapper onClick={toggleCheck}>
        {checked ? (
          <Image
            src="/assets/images/check-box.png"
            alt="check"
            width={28}
            height={28}
          />
        ) : (
          <Image
            src="/assets/images/non-check-box.png"
            alt="check"
            width={28}
            height={28}
          />
        )}
      </CheckWrapper>
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

const CheckWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 0;
  width: fit-content;
`;
