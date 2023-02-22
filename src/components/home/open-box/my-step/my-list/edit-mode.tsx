import { RestaurantType } from '@/api/wishs';
import SelectRestaurantItem from '@/components/common/restaurant-item/select-restaurant-item';
import {
  BottomBox,
  ItemListWrapperWithButton,
} from '@/components/home/open-box/step-styled';
import { ButtonStyled } from '@/styles/core';
import { useState } from 'react';

interface MyListProps {
  list: RestaurantType[];
  isFullPage?: boolean;
}
export default function MyListEdit({ list, isFullPage }: MyListProps) {
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
      <ItemListWrapperWithButton isFullPage={isFullPage}>
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
