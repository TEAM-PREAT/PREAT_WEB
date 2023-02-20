import styled from 'styled-components';
import Image from 'next/image';
import { ButtonStyled } from '@/styles/core';
import { Container } from '@/components/join/layout';
import BackIcon from '@/components/icons/back-icon';

interface NicknameSettingCompleteProps {
  onNextStep: () => void;
  onPrevStep: () => void;
  nickname: string;
}

function NicknameSettingComplete({
  onNextStep,
  onPrevStep,
  nickname,
}: NicknameSettingCompleteProps) {
  return (
    <>
      <Header>
        <div onClick={onPrevStep}>
          <BackIcon />
        </div>
      </Header>
      <Wrapper>
        <InnerBox>
          <Title>
            <strong>{nickname}</strong>님
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
          <Button onClick={onNextStep}>확인</Button>
        </InnerBox>
      </Wrapper>
    </>
  );
}

const Header = styled.div`
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 0 0px;
`;

const Wrapper = styled(Container)`
  min-height: calc(100vh - 50px);
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
  margin-top: 50px;
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
