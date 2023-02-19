import BackIcon from '@/components/icons/back-icon';
import { Container } from '@/components/join/layout';
import { ChildrenProps } from '@/types';
import styled from 'styled-components';

interface SettingContainerProps extends ChildrenProps {
  title: string;
  step: number;
}

export default function SettingContainer({
  title,
  step,
  children,
}: SettingContainerProps) {
  return (
    <Wrapper>
      <Header>
        <BackIcon />
      </Header>
      <Heading>{title}</Heading>
      <ProgressContainer step={step} />

      <ContainerWithHeaderStyled>{children}</ContainerWithHeaderStyled>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
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
    width: ${(props) => `${props.step * 33}%`};
    display: block;

    background: #ff6c3e;
    border-radius: 3px;
  }
`;
