import { RestaurantType } from '@/api/wishs';
import { ItemListWrapper } from '@/components/home/open-box/step-styled';
import PredictRestaurantItem from '@/components/home/open-box/wish-step/predict-restauraunt-item';

interface MyListProps {
  list: RestaurantType[];
  isFullPage?: boolean;
  reload: () => void;
}

export default function WishList({ list, isFullPage, reload }: MyListProps) {
  return (
    <ItemListWrapper isFullPage={isFullPage}>
      {list.map((item) => (
        <PredictRestaurantItem key={item.id} {...item} />
      ))}
    </ItemListWrapper>
  );
}
