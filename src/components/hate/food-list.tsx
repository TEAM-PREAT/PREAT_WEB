import FoodItem from '@/components/hate/food-item';
import { useState } from 'react';
import styled from 'styled-components';

const DUMMY = [
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

interface FoodListProps {
  selectList: string[];
  handleSelectList: (newSelectList: string[]) => void;
}
export default function FoodList({
  selectList,
  handleSelectList,
}: FoodListProps) {
  const [list, setList] = useState(DUMMY);

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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin: 25px 0;
`;
