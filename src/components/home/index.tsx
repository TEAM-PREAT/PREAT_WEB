import TopBox from '@/components/home/top-box';
import Map from '@/components/map';
import styled from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <TopBoxWrapper>
        <TopBox />
      </TopBoxWrapper>
      <Map />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  position: relative;
  /* background-color: #353553; */
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
