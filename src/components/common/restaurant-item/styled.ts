import { FlexColumn, Flex, MaxItemContainer } from '@/styles/core';
import styled from 'styled-components';

export const RestaurantItemWrapper = styled(MaxItemContainer)`
  position: relative;
  display: flex;
  gap: 17px;
  padding: 12px 0;
  /* max-width: 325px;
  margin: 0 auto; */
  & + & {
    border-top: 0.8px solid #cccccc;
  }
`;

export const RightWrapper = styled(FlexColumn)`
  justify-content: space-around;
`;

export const ImageWrapper = styled.div`
  width: 92px;
  height: 92px;
  background-color: #d9d9d9;
  border-radius: 12px;
`;

export const TextWrapper = styled(Flex)`
  gap: 5px;
  align-items: flex-end;
  height: 29px;
`;

export const Name = styled.div`
  font-weight: 900;
  font-size: 20px;
  line-height: normal;

  color: #000000;
`;
export const Type = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #7d7d7d;
`;
export const Location = styled.div`
  font-weight: 500;
  font-size: 12px;

  color: #5a5a5a;
`;

export const StarListWrapper = styled.div``;
