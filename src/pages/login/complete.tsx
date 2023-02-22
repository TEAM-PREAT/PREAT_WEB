import withLayout from '@/hoc/withLayout';
import { HOME } from '@/utils/path';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

function LoginComplete() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push(HOME), 2000);
  }, [router]);

  return (
    <Wrapper>
      <Text>반가워요.</Text>
      <Text>PREAT을 </Text>
      <Text>즐겨보세요.</Text>
      <LogoWrapper>
        <Image
          src="/assets/svgs/logo.svg"
          alt="메인 배경 이미지"
          width={200}
          height={81}
        />
      </LogoWrapper>
      <MainImageWrapper>
        <Image
          src="/assets/images/preat_1.png"
          alt="kakao-login"
          width={350}
          height={400}
        />
      </MainImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 67px;
  height: 100vh;
  overflow: hidden;
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: 900;
  line-height: 50px;
`;

const LogoWrapper = styled.div`
  margin: 80px auto 0;
  text-align: center;
  position: relative;
  right: 30px;
`;

const MainImageWrapper = styled.div``;
export default withLayout(LoginComplete, '환영합니다. ', '로그인 완료', false);
