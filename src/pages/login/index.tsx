import login from '@/api';
import withLayout from '@/hoc/withLayout';
import Image from 'next/image';
import styled from 'styled-components';

function LoginPage() {
  return (
    <div>
      <MainImageWrapper>
        <Image
          src="/assets/images/preat_1.png"
          alt="kakao-login"
          width={350}
          height={400}
        />
      </MainImageWrapper>
      <KakaoButton onClick={login}>
        <Image
          src="/assets/images/kakao_login_medium_narrow.png"
          alt="kakao-login"
          width={216}
          height={53}
        />
      </KakaoButton>
    </div>
  );
}

const MainImageWrapper = styled.div`
  position: absolute;
  top: 150px;
  right: 30px;
  margin: auto;
`;

const KakaoButton = styled.button`
  position: absolute;
  margin: auto;
  bottom: 80px;
  left: 0;
  right: 0;
  cursor: pointer;
`;

export default withLayout(LoginPage, '로그인', '로그인');
