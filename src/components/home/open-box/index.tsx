import OpenStatus from '@/components/home/open-box/open-status';
import BigStarIcon from '@/components/icons/map/big-star-icon';
import styled, { css } from 'styled-components';

export type OpenStatusType = 'close' | 'open' | 'mid';

interface OpenBoxProps {
  openStatus: OpenStatusType;
  handleToggleOpen: () => void;
}

export default function OpenBox({
  openStatus,
  handleToggleOpen,
}: OpenBoxProps) {
  return (
    <Wrapper
      onClick={() => {
        openStatus === 'close' && handleToggleOpen();
      }}
      openStatus={openStatus}
    >
      <InnerWrapper>
        <IconWrapper onClick={handleToggleOpen}>
          <BigStarIcon />
        </IconWrapper>

        {openStatus === 'open' && <OpenStatus />}
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
    `}
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
