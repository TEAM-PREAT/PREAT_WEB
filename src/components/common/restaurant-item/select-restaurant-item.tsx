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
import styled from 'styled-components';

interface SelectRestaurantItemProps extends RestaurantScoreItemType {
  checked: boolean;
  toggleCheck: () => void;
}

export default function SelectRestaurantItem({
  src,
  type,
  location,
  name,
  score,
  checked,
  toggleCheck,
}: SelectRestaurantItemProps) {
  return (
    <Wrapper>
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
        {src && <Image src={src} alt={name} width={92} height={92} />}
      </ImageWrapper>
      <RightWrapper>
        <TextWrapper>
          <Name>{name}</Name>
          <Type>{type}</Type>
        </TextWrapper>

        <Location>{location}</Location>
        <StarListWrapper>
          <EvaluationScore score={score} />
        </StarListWrapper>
      </RightWrapper>
    </Wrapper>
  );
}

const CheckWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 0;
  width: fit-content;
`;
