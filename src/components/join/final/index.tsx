import { ButtonStyled } from '@/styles/core';
import Image from 'next/image';
import styled from 'styled-components';

interface FinalProps {
  onAction: () => void;
}
function Final({ onAction }: FinalProps) {
  return (
    <Wrapper>
      <H1>회원가입이</H1>
      <H1>완료되었습니다.</H1>

      <Desc>
        <p>반가워요</p>
        <p>PREAT</p>
        <p>즐겨보세요</p>
      </Desc>

      <Image
        src="/assets/svgs/preat.svg"
        alt="preat"
        width={149}
        height={160}
      />
      <Button onClick={onAction}>완료</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background-color: #ff6c3e;
  height: 100vh;
  color: #fff;
  padding: 150px 60px 200px;

  img {
    float: right;
  }
`;

const H1 = styled.h1`
  font-weight: 900;
  font-size: 35px;
  line-height: 50px;

  color: #ffffff;
`;

const Desc = styled.div`
  margin-top: 80px;

  font-weight: 900;
  font-size: 25px;
  line-height: 45px;

  color: #ffffff;
`;

const Button = styled(ButtonStyled)`
  background-color: #fff;
  color: #ff6c3e;
  position: absolute;
  width: 272px;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 30px;
`;

export default Final;
