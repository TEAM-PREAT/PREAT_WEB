import styled from 'styled-components';
import Image from 'next/image';
import { ButtonStyled } from '@/styles/core';

interface NicknameSettingCompleteProps {
  onNextStep: () => void;
}

function NicknameSettingComplete({ onNextStep }: NicknameSettingCompleteProps) {
  return (
    <Wrapper>
      <InnerBox>
        <Title>
          <strong>맛집매니아</strong>님
        </Title>
        <Title>환영합니다!</Title>
        <ImageWrapper>
          <Image
            src="/assets/images/preat_2.png"
            alt="preat"
            width={104}
            height={111}
          />
        </ImageWrapper>
        <Button>확인</Button>
        <Text>다시 설정하기.</Text>
      </InnerBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 90px 35px;
`;

const Title = styled.p`
  font-size: 25px;
  line-height: 34px;
  font-weight: 900;
  margin: 10px 0;
  strong {
    color: #ff6c3e;
  }
`;

const ImageWrapper = styled.div`
  text-align: right;
  position: relative;
  right: 18px;

  margin-bottom: 30px;
`;

const InnerBox = styled.div`
  background: #ffffff;
  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.1);
  border-radius: 27px;
  padding: 40px 24px;
`;

const Button = styled(ButtonStyled)``;

const Text = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 34px;

  color: #ff6c3e;
  margin-left: 10px;
  text-decoration: underline;
  text-underline-position: under;
`;
export default NicknameSettingComplete;
