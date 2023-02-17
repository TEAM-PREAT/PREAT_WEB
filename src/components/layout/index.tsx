import { ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <header>layout</header>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 475px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
`;

export default Layout;
