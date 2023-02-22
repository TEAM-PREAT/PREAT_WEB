import { RestaurantType } from '@/api/wishs';
import RestaurantItem from '@/components/common/restaurant-item';
import { ItemListWrapper } from '@/components/home/open-box/step-styled';

interface MyListProps {
  list: RestaurantType[];
  isFullPage?: boolean;
}
export default function MyList({ list, isFullPage }: MyListProps) {
  return (
    <ItemListWrapper isFullPage={isFullPage}>
      {list.map((item) => (
        <RestaurantItem key={item.id} {...item} />
      ))}
    </ItemListWrapper>
  );
}
