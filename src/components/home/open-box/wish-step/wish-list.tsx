import { RestaurantType } from '@/api/wishs';
import { ItemListWrapper } from '@/components/home/open-box/list-wrapper';
import PredictRestaurantItem from '@/components/home/open-box/wish-step/predict-restauraunt-item';

interface MyListProps {
  list: RestaurantType[];
}
export default function WishList({ list }: MyListProps) {
  return (
    <ItemListWrapper>
      {list.map((item) => (
        <PredictRestaurantItem key={item.id} {...item} />
      ))}
    </ItemListWrapper>
  );
}
