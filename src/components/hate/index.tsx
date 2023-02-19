import FoodList from '@/components/hate/food-list';
import SearchBar from '@/components/hate/search-bar';
import SettingContainer from '@/components/join/layout/ContainerWithHeading';
import { ButtonStyled } from '@/styles/core';
import Image from 'next/image';
import styled from 'styled-components';

interface HateSettingProps {
  onNextStep: () => void;
}

export default function HateSetting({}: HateSettingProps) {
  return (
    <SettingContainer title={'싫어하는 음식을 알려주세요.'} step={1}>
      <div>
        <SearchBar />
        <Title>
          호불호 음식
          <Image
            src="/assets/images/jwt.png"
            alt="jwt"
            width={71}
            height={40}
          />
        </Title>
        <FoodList />
      </div>
      <ButtonWrapper>
        <ButtonStyled>확인</ButtonStyled>
      </ButtonWrapper>
    </SettingContainer>
  );
}

const Title = styled.h2`
  font-weight: 900;
  font-size: 20px;
  line-height: 34px;
  margin-top: 35px;

  img {
    position: relative;
    top: 10px;
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 28px;
  width: 272px;
  left: 0;
  right: 0;
  margin: auto;
`;
