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
import { FlexAlignCenter } from '@/styles/core';
import Image from 'next/image';
import styled from 'styled-components';

type SelectRestaurantItemProps = RestaurantType;

export default function PredictRestaurantItem({
  imageUrl,
  category,
  name,
  rating,
  address,
}: SelectRestaurantItemProps) {
  return (
    <Wrapper>
      <TopWrapper>
        <FriendLabelBox>
          <strong>민정</strong>님의 맛집리스트!
        </FriendLabelBox>
        <PredictReviewWrapper>
          <span>예상</span>
          <SmallStarIcon />
          <span>{rating.value.toFixed(1)}</span>
        </PredictReviewWrapper>
      </TopWrapper>
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
          <EvaluationScore iconColor="#FFDA00" score={rating.value} />
        </StarListWrapper>
      </RightWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(RestaurantItemWrapper)`
  padding-top: 24px;
`;

const TopWrapper = styled(FlexAlignCenter)`
  position: absolute;
  top: 11px;
  right: 0;

  width: calc(100% - 110px);
  justify-content: space-between;
`;

const FriendLabelBox = styled.div`
  width: fit-content;
  background: #ffda00;
  mix-blend-mode: multiply;
  border-radius: 3px;
  color: #5a5a5a;
  font-weight: 700;
  font-size: 10px;
  strong {
    color: #000000;
  }
`;

const PredictReviewWrapper = styled(FlexAlignCenter)`
  justify-content: center;
  gap: 2px;

  background: #ffffff;
  border: 1px solid #ff6c3e;
  border-radius: 19px;
  width: 67px;
  height: 18px;
  font-weight: 500;
  font-size: 10px;

  color: #ff6c3e;
  svg {
    position: relative;
    bottom: 0.5px;
  }
`;

function SmallStarIcon() {
  return (
    <svg
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.65967 0.218142C5.78558 -0.0727139 6.21442 -0.072714 6.34033 0.218142L7.73345 3.43626C7.78653 3.55888 7.90655 3.64266 8.04432 3.65327L11.6603 3.9318C11.9872 3.95697 12.1197 4.34883 11.8707 4.55377L9.11565 6.8212C9.01068 6.90759 8.96484 7.04315 8.99691 7.17233L9.83861 10.5626C9.91469 10.869 9.56775 11.1112 9.28794 10.947L6.19213 9.13022C6.07418 9.06099 5.92582 9.06099 5.80787 9.13022L2.71206 10.947C2.43225 11.1112 2.08531 10.869 2.16139 10.5626L3.00309 7.17233C3.03516 7.04315 2.98932 6.90759 2.88435 6.8212L0.129326 4.55377C-0.119675 4.34883 0.0128446 3.95697 0.339662 3.9318L3.95568 3.65327C4.09345 3.64266 4.21347 3.55888 4.26655 3.43626L5.65967 0.218142Z"
        fill="#FF6C3E"
      />
    </svg>
  );
}
