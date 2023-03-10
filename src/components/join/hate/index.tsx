import { getHateFoodAPI, HateFoodType } from '@/api/join-setting';
import FoodList from '@/components/join/hate/food-list';
import SettingContainer from '@/components/join/layout/ContainerWithHeading';
import { StepStatueProps } from '@/components/join/types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface HateSettingProps extends StepStatueProps {
  onNextStep: (hateFoodList: number[]) => void;
}

export default function HateSetting({
  onNextStep,
  onPrevStep,
}: HateSettingProps) {
  const [selectList, setSelectList] = useState<number[]>([]);
  const [foodList, setFoodList] = useState<HateFoodType[]>([]);

  const isDisabled = selectList.length === 0;

  const onButtonClick = () => {
    onNextStep(selectList);
  };

  const setHateFood = async () => {
    const hateFoodList: HateFoodType[] = await getHateFoodAPI();
    setFoodList(hateFoodList);
  };

  useEffect(() => {
    setHateFood();
  }, []);

  return (
    <SettingContainer
      title={'싫어하는 음식을 알려주세요.'}
      step={1}
      onPrevStep={onPrevStep}
      isButtonDisabled={isDisabled}
      onButtonClick={onButtonClick}
    >
      <Wrapper>
        <FoodList
          list={foodList}
          selectList={selectList}
          handleSelectList={(newSelectList) => setSelectList(newSelectList)}
        />
      </Wrapper>
    </SettingContainer>
  );
}

const Wrapper = styled.div`
  width: 290px;
  margin: 0 auto;
`;
