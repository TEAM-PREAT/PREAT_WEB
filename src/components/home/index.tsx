import OpenBox, { OpenStatusType } from '@/components/home/open-box';
import TopBox from '@/components/home/top-box';
import { useState } from 'react';
import styled from 'styled-components';

export default function Home() {
  const [openStatus, setOpenStatus] = useState<OpenStatusType>('close');

  const handleOpenStatus = (status: OpenStatusType) => {
    setOpenStatus(status);
  };

  return (
    <Wrapper>
      <TopBoxWrapper>
        <TopBox />
      </TopBoxWrapper>
      {/* <Map /> */}
      <OpenBox
        openStatus={openStatus}
        onClick={() => handleOpenStatus('open')}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #353553;
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
