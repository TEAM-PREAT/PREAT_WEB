import FriendStep from '@/components/home/open-box/friend-step';
import MyStep from '@/components/home/open-box/my-step';
import WishStep from '@/components/home/open-box/wish-step';
import { CurrentStep } from '@/components/home/types';
import useGetRestaurantList from '@/components/home/useGetRestaurantList';
import { useState } from 'react';
import styled from 'styled-components';
import ToggleNav from '@/components/home/open-box/toggle-nav';
import withLayout from '@/hoc/withLayout';
import LocationIcon from '@/components/icons/location-icon';

export type OpenStatusType = 'close' | 'open' | 'mid';

function ListPage() {
  const [current, setCurrent] = useState<CurrentStep>(1);
  const { wishs, mys, friends } = useGetRestaurantList();

  const handleCurrent = (next: CurrentStep) => {
    setCurrent(next);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <LocationIconWrapper>
          <LocationIcon />
        </LocationIconWrapper>
        <ToggleNav current={current} handleCurrent={handleCurrent} />
        {current === CurrentStep.Friend && <FriendStep list={friends} />}
        {current === CurrentStep.My && <MyStep isFullPage list={mys} />}
        {current === CurrentStep.Heart && <WishStep isFullPage list={wishs} />}
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* padding-top: 50px; */
  position: relative;
  padding-bottom: 30px;

  &::after {
    content: '';
    width: 100%;
    max-width: 475px;
    height: 30px;
    position: fixed;
    background: #ffffff;
    border-top: 0.3px solid #8b8b8b;

    display: block;
    bottom: 0;
  }
`;

const LocationIconWrapper = styled.div`
  position: absolute;
`;

const InnerWrapper = styled.div`
  position: relative;
  width: 390px;
  margin: 0 auto;
  padding: 50px 30px 0;
`;

export default withLayout(ListPage, 'list', 'list');
