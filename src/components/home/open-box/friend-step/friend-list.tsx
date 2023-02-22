import { RestaurantType } from '@/api/wishs';
import PredictRestaurantItem from '@/components/home/open-box/friend-step/predict-restauraunt-item';
import { ItemListWrapper } from '@/components/home/open-box/list-wrapper';

interface MyListProps {
  list: RestaurantType[];
}

function FriendList({ list }: MyListProps) {
  return (
    <ItemListWrapper>
      {list.map((item) => (
        <PredictRestaurantItem key={item.id} {...item} />
      ))}
    </ItemListWrapper>
  );
}
export default FriendList;
