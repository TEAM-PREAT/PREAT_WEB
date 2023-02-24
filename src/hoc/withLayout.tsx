import withHead from '@/hoc/withHead';
import styled from 'styled-components';

function withLayout(
  Component: (props: any) => JSX.Element,
  title: string,
  description: string,
  isHeader = false,
) {
  const C = (props: any) => {
    return (
      <Wrapper>
        {isHeader && <Header>{title}</Header>}
        <Component {...props} />
      </Wrapper>
    );
  };

  return withHead(C, title, description);
}

const Wrapper = styled.div`
  max-width: 475px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  /*  NOTE: 삭제 */
  background-color: #fff;
`;

const Header = styled.header`
  height: 60px;
  padding: 30px;

  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

export default withLayout;
