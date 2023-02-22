import { CurrentStep } from '@/components/home/types';
import OutlineStarIcon from '@/components/icons/nav/outline-star-icon';
import SmallHeartIcon from '@/components/icons/nav/small-heart-icon';
import SmallStarIcon from '@/components/icons/nav/small-star-icon';
import SmileIcon from '@/components/icons/nav/smile-star';
import styled, { css } from 'styled-components';

const NAV_LIST = [
  {
    key: CurrentStep.Friend,
    Icon: <SmileIcon />,
    CurrentIcon: <SmileIcon color="#fff" />,
  },
  {
    key: CurrentStep.My,
    Icon: <OutlineStarIcon />,
    CurrentIcon: <SmallStarIcon />,
  },
  {
    key: CurrentStep.Heart,
    Icon: <SmallHeartIcon />,
    CurrentIcon: <SmallHeartIcon color="#fff" />,
  },
];
interface ToggleNavProps {
  current: CurrentStep;
  handleCurrent: (next: CurrentStep) => void;
}

export default function ToggleNav({ current, handleCurrent }: ToggleNavProps) {
  return (
    <Wrapper position={current}>
      {NAV_LIST.map(({ key, Icon, CurrentIcon }) => {
        const isCurrent = current === key;
        return (
          <Item
            key={key}
            onClick={() => handleCurrent(key)}
            isCurrent={isCurrent}
          >
            {isCurrent ? CurrentIcon : Icon}
          </Item>
        );
      })}
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

  svg {
    z-index: 3;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    transition: all 0.8s;
    transform: translateX(0);
    display: inline-block;
    z-index: 2;
    box-shadow: 2px 0px 3px rgba(0, 0, 0, 0.25);
    width: 91px;
    height: 34px;
    border-radius: 17px;

    ${(props) =>
      props.position === 0 &&
      css`
        transform: translateX(0);
        background: #ffda00;
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

const Item = styled.div<{ isCurrent: boolean }>`
  position: absolute;
  display: inline-block;
  width: 91px;
  height: 34px;
  line-height: 34px;
  border-radius: 17px;
  top: 0;
  transition: all 0.2s ease-in;
  text-align: center;
  svg {
    position: relative;
    z-index: ${(props) => (props.isCurrent ? 3 : 2)};
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
