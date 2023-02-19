import FoodList from '@/components/hate/food-list';
import SearchBar from '@/components/hate/search-bar';
import SettingContainer from '@/components/join/layout/ContainerWithHeading';
import { ButtonStyled } from '@/styles/core';
import { useState } from 'react';
import styled from 'styled-components';

interface HateSettingProps {
  onNextStep: () => void;
}

export default function HateSetting({}: HateSettingProps) {
  const [selectList, setSelectList] = useState<string[]>([]);

  const [isSearchMode, setIsSearchMode] = useState(false);
  const isDisabled = selectList.length === 0;

  return (
    <SettingContainer title={'싫어하는 음식을 알려주세요.'} step={1}>
      <Wrapper>
        <SearchBar
          isSearchMode={isSearchMode}
          handleSearchMode={() => setIsSearchMode(!isSearchMode)}
        />
        {!isSearchMode && (
          <FoodList
            selectList={selectList}
            handleSelectList={(newSelectList) => setSelectList(newSelectList)}
          />
        )}
      </Wrapper>
      <ButtonWrapper>
        <ButtonStyled disabled={isDisabled}>확인</ButtonStyled>
      </ButtonWrapper>
    </SettingContainer>
  );
}

const Wrapper = styled.div`
  width: 290px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 28px;
  width: 272px;
  left: 0;
  right: 0;
  margin: auto;
`;
