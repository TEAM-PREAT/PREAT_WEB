import { FriendRestaurantType } from '@/api/wishs';
import FriendList from '@/components/home/open-box/friend-step/friend-list';
import { NavTitle, StepWrapper } from '@/components/home/open-box/step-styled';
import styled from 'styled-components';

interface StepProps {
  list: FriendRestaurantType[];
}

function FriendStep({ list }: StepProps) {
  return (
    <div>
      <FriendNavTitle>친구 맛집 리스트</FriendNavTitle>
      <StepWrapper>
        <FriendList list={list} />
      </StepWrapper>
    </div>
  );
}
const FriendNavTitle = styled(NavTitle)`
  margin-bottom: 38px;
`;
export default FriendStep;
