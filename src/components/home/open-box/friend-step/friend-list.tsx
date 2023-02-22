import { FriendRestaurantType } from '@/api/wishs';
import PredictFriendRestaurantItem from '@/components/home/open-box/friend-step/predict-restauraunt-item';
import { ItemListWrapper } from '@/components/home/open-box/step-styled';

interface MyListProps {
  list: FriendRestaurantType[];
}

function FriendList({ list }: MyListProps) {
  return (
    <ItemListWrapper>
      {list.map((item) => (
        <PredictFriendRestaurantItem key={item.id} {...item} />
      ))}
    </ItemListWrapper>
  );
}
export default FriendList;
