import FoodList from '@/components/join/hate/food-list';
import OverlayLogo from '@/components/join/hate/overlay-logo';
import SearchBar from '@/components/join/hate/search-bar';
import SettingContainer from '@/components/join/layout/ContainerWithHeading';
import { ButtonStyled } from '@/styles/core';
import { useState } from 'react';
import styled from 'styled-components';

export const DUMMY = [
  {
    key: '1',
    label: 'food item',
    src: '/assets/images/pine.png',
  },
  {
    key: '2',
    label: 'food item',
    src: '/assets/images/pine.png',
  },
  {
    key: '3',
    label: 'food item',
    src: '/assets/images/pine.png',
  },
  {
    key: '4',
    label: 'food item',
  },
];

interface HateSettingProps {
  onNextStep: (hateFoodList: string[]) => void;
}

export default function HateSetting({ onNextStep }: HateSettingProps) {
  const [selectList, setSelectList] = useState<string[]>([]);
  const [foodList, setFoodList] = useState(DUMMY);

  const [isSearchMode, setIsSearchMode] = useState(false);
  const [isVisibleLogo, setIsVisibleLogo] = useState(false);
  const isDisabled = selectList.length === 0;

  const handleVisibleLogo = () => {
    setIsVisibleLogo(true);
    setTimeout(() => setIsVisibleLogo(false), 2500);
  };

  const onButtonClick = () => {
    onNextStep(selectList);
  };

  const newFoodAdd = (key: string, content: string) => {
    const foodKeyList = foodList.map(({ key }) => key);
    if (foodKeyList.includes(key)) return;

    const newFood = { key, label: content };
    console.log('newFood: ', newFood);

    setSelectList([...selectList, key]);
    setFoodList([...foodList, newFood]);
    setIsSearchMode(false);
    handleVisibleLogo();
  };

  return (
    <SettingContainer title={'싫어하는 음식을 알려주세요.'} step={1}>
      <Wrapper>
        <SearchBar
          isSearchMode={isSearchMode}
          handleSearchMode={() => setIsSearchMode(true)}
          onAction={newFoodAdd}
        />
        {!isSearchMode && (
          <FoodList
            list={foodList}
            selectList={selectList}
            handleSelectList={(newSelectList) => setSelectList(newSelectList)}
          />
        )}
      </Wrapper>
      <ButtonWrapper>
        <ButtonStyled disabled={isDisabled} onClick={onButtonClick}>
          확인
        </ButtonStyled>
      </ButtonWrapper>

      {isVisibleLogo && <OverlayLogo />}
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
