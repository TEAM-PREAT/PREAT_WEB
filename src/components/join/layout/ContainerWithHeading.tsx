import BackIcon from '@/components/icons/back-icon';
import { Container } from '@/components/join/layout';
import { ButtonStyled } from '@/styles/core';
import { ChildrenProps } from '@/types';
import styled from 'styled-components';

interface SettingContainerProps extends ChildrenProps {
  title: string;
  step: number;
  onPrevStep: () => void;

  isButtonDisabled: boolean;
  onButtonClick: () => void;
}

export default function SettingContainer({
  title,
  step,
  children,
  onPrevStep,
  isButtonDisabled,
  onButtonClick,
}: SettingContainerProps) {
  return (
    <Wrapper>
      <Header>
        <IconWrapper onClick={onPrevStep}>
          <BackIcon />
        </IconWrapper>
      </Header>
      <Heading>{title}</Heading>
      <ProgressContainer step={step} />

      <ContainerWithHeaderStyled>
        {children}

        <ButtonWrapper>
          <ButtonStyled disabled={isButtonDisabled} onClick={onButtonClick}>
            확인
          </ButtonStyled>
        </ButtonWrapper>
      </ContainerWithHeaderStyled>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
`;

const IconWrapper = styled.div`
  width: fit-content;
`;
const ContainerWithHeaderStyled = styled(Container)`
  min-height: calc(100vh - 130px);
`;

const Header = styled.div`
  padding: 30px 0 10px;
`;

const Heading = styled.h1`
  font-weight: 900;
  font-size: 20px;
  line-height: 34px;
  color: #000000;
`;

const ProgressContainer = styled.div<{ step: number }>`
  margin: 10px 0;
  width: 99%;
  height: 6px;
  background: #d9d9d9;
  border-radius: 3px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${(props) => `${props.step * 33 + 1}%`};
    display: block;

    background: #ff6c3e;
    border-radius: 3px;
  }
`;
const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 28px;
  width: 272px;
  left: 0;
  right: 0;
  margin: auto;
`;
