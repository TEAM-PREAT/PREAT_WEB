import Image from 'next/image';
import styled from 'styled-components';

export default function OverlayLogo() {
  return (
    <LogoOverlay>
      <Image
        src="/assets/images/preat_2.png"
        alt="preat"
        width={46}
        height={49}
      />
      <span>추가완료</span>
    </LogoOverlay>
  );
}

const LogoOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  width: 94px;
  height: 94px;

  background: #ffffff;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding-top: 5px;
  animation: anim 2s forwards;

  span {
    font-weight: 500;
    font-size: 10px;
    line-height: 20px;

    color: #ff6c3e;
  }
  opacity: 1;

  @keyframes anim {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
