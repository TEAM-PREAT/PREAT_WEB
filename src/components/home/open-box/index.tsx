import { RestaurantType } from '@/api/types';
import RestaurantItem from '@/components/common/restaurant-item';
import FriendStep from '@/components/home/open-box/friend-step';
import MyStep from '@/components/home/open-box/my-step';
import ToggleNav from '@/components/home/open-box/toggle-nav';
import WishStep from '@/components/home/open-box/wish-step';
import { CurrentStep } from '@/components/home/types';
import useGetRestaurantList from '@/components/home/useGetRestaurantList';
import BigHeartIcon from '@/components/icons/map/big-heart-icon';
import BigSmileIcon from '@/components/icons/map/big-smile-icon';
import BigStarIcon from '@/components/icons/map/big-star-icon';
import { MarkerType } from '@/hooks/useMap';
import styled, { css } from 'styled-components';

export type OpenStatusType = 'close' | 'open' | 'mid';

const TOP_ICON_LIST = [
  <BigSmileIcon key="big-smile" />,
  <BigStarIcon key="big-star" />,
  <BigHeartIcon key="big-heart" />,
];

interface MapRestaurantType extends RestaurantType {
  marker: MarkerType;
}

interface OpenBoxProps {
  openStatus: OpenStatusType;
  handleToggleOpen: () => void;
  handleClose: () => void;
  midItem?: MapRestaurantType;

  current: CurrentStep;
  handleCurrent: (next: CurrentStep) => void;
}

export default function OpenBox({
  openStatus,
  handleToggleOpen,
  midItem,
  handleCurrent,
  current,
  handleClose,
}: OpenBoxProps) {
  const { wishs, mys, friends, reload } = useGetRestaurantList();

  if (openStatus === 'open') {
    return (
      <Wrapper openStatus="open">
        <InnerWrapper>
          <IconWrapper onClick={handleClose}>
            {TOP_ICON_LIST[current]}
          </IconWrapper>
          <div>
            <ToggleNav current={current} handleCurrent={handleCurrent} />
            {current === CurrentStep.Friend && <FriendStep list={friends} />}
            {current === CurrentStep.My && (
              <MyStep list={mys} reload={reload} />
            )}
            {current === CurrentStep.Heart && (
              <WishStep reload={reload} list={wishs} />
            )}
          </div>
        </InnerWrapper>
      </Wrapper>
    );
  }

  if (openStatus === 'mid' && midItem) {
    // const icon = MappingCurrentIcon(midItem.marker);
    return (
      <Wrapper openStatus="mid">
        <InnerWrapper>
          <IconWrapper onClick={handleClose}>
            {TOP_ICON_LIST[current]}
          </IconWrapper>
        </InnerWrapper>
        <MidItemWrapper>
          <RestaurantItem key={midItem.id} {...midItem} />
        </MidItemWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper onClick={handleToggleOpen} openStatus="close">
      <InnerWrapper>
        <IconWrapper onClick={handleToggleOpen}>
          {TOP_ICON_LIST[current]}
        </IconWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ openStatus: OpenStatusType }>`
  width: 100%;
  height: 100vh;
  border-radius: 34px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
  position: absolute;
  left: 0;
  right: 0;
  background-color: #fff;
  transition: bottom 1s;
  z-index: 20;

  ${(props) =>
    props.openStatus === 'close' &&
    css`
      bottom: calc(-100vh + 77px);
    `}
  ${(props) =>
    props.openStatus === 'mid' &&
    css`
      bottom: calc(-100vh + 210px);
    `}
    ${(props) =>
    props.openStatus === 'open' &&
    css`
      bottom: -200px;
    `};
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 50px 30px 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: -40px;
  left: 0;
  right: 0;
  margin: auto;
  width: fit-content;
  cursor: pointer;
`;

const MidItemWrapper = styled.div`
  max-width: 325px;
  padding: 0 10px;
  margin: auto;
  border-bottom: 0.8px solid rgba(204, 204, 204, 0.6);
`;
