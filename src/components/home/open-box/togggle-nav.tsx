import { CurrentStep } from '@/components/home/types';
import OutlineStarIcon from '@/components/icons/nav/outline-star-icon';
import SmallHeartIcon from '@/components/icons/nav/small-heart-icon';
import SmallStarIcon from '@/components/icons/nav/small-star-icon';
import SmileIcon from '@/components/icons/nav/smile-star';
import styled, { css } from 'styled-components';

interface ToggleNavProps {
  current: CurrentStep;
  handleCurrent: (next: CurrentStep) => void;
}

export default function ToggleNav({ current, handleCurrent }: ToggleNavProps) {
  return (
    <Wrapper position={current}>
      <Item
        // isCurrent={current === CurrentStep.Friend}
        onClick={() => handleCurrent(CurrentStep.Friend)}
      >
        <SmileIcon
          color={current === CurrentStep.Friend ? '#fff' : '#BDBDBD'}
        />
      </Item>
      <Item
        // isCurrent={current === CurrentStep.My}
        onClick={() => handleCurrent(CurrentStep.My)}
      >
        {current === CurrentStep.My ? <SmallStarIcon /> : <OutlineStarIcon />}
      </Item>
      <Item
        // isCurrent={current === CurrentStep.Heart}
        onClick={() => handleCurrent(CurrentStep.Heart)}
      >
        <SmallHeartIcon
          color={current === CurrentStep.Heart ? '#fff' : '#BDBDBD'}
        />
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ position?: number }>`
  position: relative;
  width: 218px;
  height: 34px;
  margin: auto;
  background: #e8e8e8;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 17px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    transition: all 0.8s;
    transform: translateX(0);
    display: inline-block;
    z-index: 1;
    box-shadow: 2px 0px 3px rgba(0, 0, 0, 0.25);
    width: 91px;
    height: 34px;
    border-radius: 17px;

    ${(props) =>
      props.position === 0 &&
      css`
        transform: translateX(0);
        background: #14ec6a;
      `}

    ${(props) =>
      props.position === 1 &&
      css`
        transform: translateX(64px);
        background: #ff6c3e;
      `}

    ${(props) =>
      props.position === 2 &&
      css`
        transform: translateX(127px);
        background: #ff60ac;
      `}
  }
`;

const Item = styled.div`
  position: absolute;
  display: inline-block;
  width: 91px;
  height: 34px;
  line-height: 34px;
  border-radius: 17px;
  top: 0;
  transition: all 0.2s ease-in;
  text-align: center;
  z-index: 2;
  svg {
    position: relative;
  }

  &:nth-child(1) {
    left: 0;
    svg {
      top: 2px;
    }
  }
  &:nth-child(2) {
    left: 64px;
    svg {
      top: 1px;
    }
  }
  &:nth-child(3) {
    right: 0;
    svg {
      top: 2px;
    }
  }
`;
