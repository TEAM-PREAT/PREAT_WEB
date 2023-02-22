import { RestaurantType } from '@/api/wishs';
import SelectRestaurantItem from '@/components/common/restaurant-item/select-restaurant-item';
import { useState } from 'react';

interface MyListProps {
  list: RestaurantType[];
}
export default function MyList({ list }: MyListProps) {
  const [checkList, setCheckList] = useState<number[]>([]);
  const handleCheck = (id: number) => {
    if (checkList.includes(id)) {
      const newCheckList = checkList.filter((data) => data !== id);

      setCheckList(newCheckList);
    } else {
      setCheckList([...checkList, id]);
    }
  };

  return (
    <>
      {list.map((item) => (
        <SelectRestaurantItem
          key={item.id}
          {...item}
          checked={checkList.includes(item.id)}
          toggleCheck={() => handleCheck(item.id)}
        />
      ))}
    </>
  );
}
