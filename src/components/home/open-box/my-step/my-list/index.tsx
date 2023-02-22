import { RestaurantType } from '@/api/wishs';
import RestaurantItem from '@/components/common/restaurant-item';
import { ItemListWrapper } from '@/components/home/open-box/list-wrapper';

interface MyListProps {
  list: RestaurantType[];
}
export default function MyList({ list }: MyListProps) {
  return (
    <ItemListWrapper>
      {list.map((item) => (
        <RestaurantItem key={item.id} {...item} />
      ))}
    </ItemListWrapper>
  );
}
