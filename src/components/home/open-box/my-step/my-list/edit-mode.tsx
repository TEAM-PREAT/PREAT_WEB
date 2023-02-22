import { RestaurantType } from '@/api/wishs';
import SelectRestaurantItem from '@/components/common/restaurant-item/select-restaurant-item';
import { ItemListWrapperWithButton } from '@/components/home/open-box/list-wrapper';
import { ButtonStyled } from '@/styles/core';
import { useState } from 'react';
import styled from 'styled-components';

interface MyListProps {
  list: RestaurantType[];
}
export default function MyListEdit({ list }: MyListProps) {
  const [checkList, setCheckList] = useState<number[]>([]);

  const handleCheck = (id: number) => {
    if (checkList.includes(id)) {
      const newCheckList = checkList.filter((data) => data !== id);

      setCheckList(newCheckList);
    } else {
      setCheckList([...checkList, id]);
    }
  };

  const onAction = () => {
    console.log('checkList: ', checkList);
  };
  return (
    <>
      <ItemListWrapperWithButton>
        {list.map((item) => (
          <SelectRestaurantItem
            key={item.id}
            {...item}
            checked={checkList.includes(item.id)}
            toggleCheck={() => handleCheck(item.id)}
          />
        ))}
      </ItemListWrapperWithButton>
      <BottomBox>
        <ButtonStyled onClick={onAction}>확인</ButtonStyled>
      </BottomBox>
    </>
  );
}
const BottomBox = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  width: 100vw;
  max-width: 475px;
  height: 100px;

  padding-top: 18px;
  background-color: #fff;
  text-align: center;
  border-top: 0.3px solid #8b8b8b;
  button {
    width: 232px;
  }
`;
