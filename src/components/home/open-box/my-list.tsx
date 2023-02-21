import SelectRestaurantItem from '@/components/common/restaurant-item/select-restaurant-item';
import { DUMMY } from '@/components/home/types';
import { useState } from 'react';

export default function MyList() {
  const [list, setList] = useState(
    DUMMY.map((item) => ({ ...item, checked: false })),
  );

  const handleCheck = (id: number) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );

    setList(newList);
  };
  return (
    <>
      {list.map((item) => (
        <SelectRestaurantItem
          key={item.id}
          {...item}
          toggleCheck={() => handleCheck(item.id)}
        />
      ))}
    </>
  );
}
