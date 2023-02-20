import Loading from '@/components/common/loading';
import withLayout from '@/hoc/withLayout';
import { AbsoluteCenterStyled } from '@/styles/core';

function LoginLoading() {
  return (
    <AbsoluteCenterStyled>
      <Loading />
    </AbsoluteCenterStyled>
  );
}

export default withLayout(LoginLoading, 'loading...', 'loading...', false);
