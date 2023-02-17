import styled from 'styled-components';
import Image from 'next/image';

function Preat() {
  return (
    <Wrapper>
      <Image src="/assets/images/preat_bg.png" alt="메인 배경 이미지" fill />
      <LogoWrapper>
        <Image
          src="/assets/svgs/logo.svg"
          alt="메인 배경 이미지"
          width={200}
          height={81}
        />
      </LogoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  img {
    object-fit: cover;
  }
`;
const LogoWrapper = styled.div`
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;

  width: fit-content;
  height: fit-content;
`;
export default Preat;
