import { RestaurantType } from '@/api/wishs';
import FriendStep from '@/components/home/open-box/friend-step';
import MyStep from '@/components/home/open-box/my-step';
import ToggleNav from '@/components/home/open-box/toggle-nav';
import { CurrentStep } from '@/components/home/types';

interface OpenStatusProps {
  current: CurrentStep;
  handleCurrent: (next: CurrentStep) => void;
  list: RestaurantType[];
}

export default function OpenStatus({
  current,
  handleCurrent,
  list,
}: OpenStatusProps) {
  return (
    <div>
      <ToggleNav current={current} handleCurrent={handleCurrent} />
      {current === CurrentStep.Friend ? (
        <FriendStep list={list} />
      ) : (
        <MyStep list={list} />
      )}
    </div>
  );
}
