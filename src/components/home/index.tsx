import OpenBox, { OpenStatusType } from '@/components/home/open-box';
import TopBox from '@/components/home/top-box';
import { useState } from 'react';
import styled from 'styled-components';
import Map from '@/components/common/map';
import { MarkerType } from '@/hooks/useMap';
import { RestaurantType } from '@/api/types';
import { CurrentStep } from '@/components/home/types';
import Sidebar from '@/components/home/sidebar';
import useToggle from '@/hooks/useToggle';
import { useRouter } from 'next/router';

interface MapRestaurantType extends RestaurantType {
  marker: MarkerType;
}

const INIT_CURRENT: CurrentStep = 1;
const INIT_OPEN_STATUS: OpenStatusType = 'close';

export default function Home() {
  const [openStatus, setOpenStatus] =
    useState<OpenStatusType>(INIT_OPEN_STATUS);
  const [current, setCurrent] = useState<CurrentStep>(INIT_CURRENT);
  const [midItem, setMidItem] = useState<MapRestaurantType>();
  const [isOpen, toggleIsOpen] = useToggle();

  const handleOpenStatus = (status: OpenStatusType) => {
    setOpenStatus(status);
  };

  const handleCurrent = (next: CurrentStep) => {
    setCurrent(next);
  };

  const handleMidOpen = (item: MapRestaurantType) => {
    // TODO : 수정할수있을까
    setMidItem(item);
    setOpenStatus('mid');
    setCurrent(MappingCurrentIcon(item.marker));
  };

  return (
    <Wrapper>
      <TopBoxWrapper>
        <TopBox onSidebarOpen={toggleIsOpen} />
      </TopBoxWrapper>
      <Map handleMarkerClick={handleMidOpen} />
      <OpenBox
        openStatus={openStatus}
        handleToggleOpen={() =>
          handleOpenStatus(openStatus === 'open' ? 'close' : 'open')
        }
        handleClose={() => handleOpenStatus('close')}
        current={current}
        handleCurrent={handleCurrent}
        midItem={midItem}
      />
      <Sidebar isOpen={isOpen} onClose={toggleIsOpen} />
    </Wrapper>
  );
}

const MappingCurrentIcon = (marker: MarkerType) => {
  if (marker === 'star') return 1;
  if (marker === 'wish') return 2;
  if (marker === 'friend') return 0;
  return 0;
};

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  position: relative;
  /* background-color: #353553; */
  overflow: hidden;
`;

const TopBoxWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 209px;
  left: 0px;
  top: 0px;
  right: 0;
  z-index: 10;
`;
