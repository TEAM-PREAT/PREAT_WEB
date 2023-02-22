import { RestaurantType } from '@/api/wishs';
import MyStep from '@/components/home/open-box/my-step';
import ToggleNav from '@/components/home/open-box/toggle-nav';
import { CurrentStep } from '@/components/home/types';
import styled from 'styled-components';

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
      <MyStep list={list} />
    </div>
  );
}
