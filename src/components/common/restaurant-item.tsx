import EvaluationScore from '@/components/common/evaluation-score';
import { RestaurantScoreItemType } from '@/components/join/types';
import { Flex, FlexColumn } from '@/styles/core';
import Image from 'next/image';
import styled from 'styled-components';

interface RestaurantItemProps extends RestaurantScoreItemType {
  handleReview?: (id: number, score: number) => void;
  isChecked?: boolean;
  toggleCheck?: () => void;
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

const Wrapper = styled.div`
  display: flex;
  gap: 17px;
  padding: 12px 0;

  & + & {
    border-top: 0.8px solid #cccccc;
  }
`;

const RightWrapper = styled(FlexColumn)`
  justify-content: space-around;
`;

const ImageWrapper = styled.div`
  width: 92px;
  height: 92px;
  background-color: #d9d9d9;
  border-radius: 12px;
`;

const TextWrapper = styled(Flex)`
  gap: 5px;
  align-items: flex-end;
  height: 29px;
`;

const Name = styled.div`
  font-weight: 900;
  font-size: 20px;
  line-height: normal;

  color: #000000;
`;
const Type = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #7d7d7d;
`;
const Location = styled.div`
  font-weight: 500;
  font-size: 12px;

  color: #5a5a5a;
`;

const StarListWrapper = styled.div``;
