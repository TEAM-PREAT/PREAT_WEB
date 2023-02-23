import { ButtonStyled, FlexAlignCenter } from '@/styles/core';
import styled from 'styled-components';

export default function FriendList() {
  return (
    <div>
      <Heading>친구 목록</Heading>
      <Desc>36명의 친구</Desc>

      <ItemWrapper>
        <ImageWrapper></ImageWrapper>
        <span>마라마라덕</span>
        <FollowButton>팔로잉</FollowButton>
      </ItemWrapper>
      <Divider />
      <ItemWrapper>
        <ImageWrapper></ImageWrapper>
        <span>마라마라덕</span>
        <FollowButton>팔로잉</FollowButton>
      </ItemWrapper>
      <Divider />
    </div>
  );
}

const Heading = styled.h2`
  font-weight: 900;
  font-size: 15px;
  line-height: 34px;
  padding: 0 20px;
`;
const Divider = styled.hr`
  border: 0.8px solid #cccccc;
`;
const Desc = styled.p`
  font-weight: 500;
  font-size: 10px;
  padding: 0 20px;
  margin-bottom: 10px;
`;

const ImageWrapper = styled.div`
  width: 39px;
  height: 39px;
  border-radius: 50%;

  font-weight: 900;
  font-size: 15px;
  line-height: 34px;

  background-color: #e5e5e5;
`;
const ItemWrapper = styled.div`
  padding: 10px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FollowButton = styled(ButtonStyled)`
  width: 62px;
  background: #ff6c3e;
  border-radius: 13px;
  height: 26px;

  font-weight: 500;
  font-size: 12px;

  text-align: center;

  color: #ffffff;
`;
