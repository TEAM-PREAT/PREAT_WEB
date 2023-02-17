import styled from 'styled-components';
import Image from 'next/image';

function Preat() {
  return (
    <Wrapper>
      <Image
        src="/assets/images/preat_bg.png"
        alt="메인 배경 이미지"
        layout="fill"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default Preat;
