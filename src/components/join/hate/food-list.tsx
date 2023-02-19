import FoodItem from '@/components/join/hate/food-item';
import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface FoodListProps {
  list: {
    label: string;
    key: string;
    src?: string;
  }[];
  selectList: string[];
  handleSelectList: (newSelectList: string[]) => void;
}
export default function FoodList({
  selectList,
  handleSelectList,
  list,
}: FoodListProps) {
  const handleSelectItem = (key: string) => {
    if (selectList.includes(key)) {
      const newSelectList = selectList.filter((element) => element !== key);
      handleSelectList(newSelectList);
    } else {
      handleSelectList([...selectList, key]);
    }
  };

  return (
    <Wrapper>
      <Title>
        호불호 음식
        <Image src="/assets/images/jwt.png" alt="jwt" width={71} height={40} />
      </Title>
      <FoodListWrapper>
        {list.map(({ key, label, src }) => {
          const isSelected = selectList.includes(key);
          return (
            <FoodItem
              key={key}
              label={label}
              isSelected={isSelected}
              src={src}
              onSelect={() => handleSelectItem(key)}
            />
          );
        })}
      </FoodListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

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

const FoodListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin: 25px 0;
`;
