import RestaurantItem from '@/components/common/restaurant-item';
import { DUMMY } from '@/components/home/types';

function MyList() {
  return (
    <>
      {DUMMY.map((item) => (
        <RestaurantItem key={item.id} {...item} />
      ))}
    </>
  );
}
export default MyList;
