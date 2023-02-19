import BackIcon from '@/components/icons/back-icon';
import { ChildrenProps } from '@/types';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 10px 0;
  width: 100%;
  max-width: 320px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 100vh;
`;

const ContainerWithHeaderStyled = styled(Container)`
  min-height: calc(100vh - 80px);
`;

const Header = styled.div`
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0 10px;

  height: 80px;
`;

export function ContainerWithHeader({ children }: ChildrenProps) {
  return (
    <>
      <Header>
        <BackIcon />
      </Header>
      <ContainerWithHeaderStyled>{children}</ContainerWithHeaderStyled>
    </>
  );
}
