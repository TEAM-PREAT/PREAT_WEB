import { requestKakaoLogin } from '@/api/auth';
import { tokenSetting } from '@/api/kakao';
import Loading from '@/components/common/loading';
import withLayout from '@/hoc/withLayout';
import { AbsoluteCenterStyled } from '@/styles/core';
import { useEffect } from 'react';

function KakaoLogin() {
  const login = async (code: string) => {
    try {
      const kakao_access_token = await tokenSetting(code);
      if (!kakao_access_token) {
        throw new Error('카카오 토큰을 가져오는데 실패했습니다. ');
      }

      const isNewUser = await requestKakaoLogin(kakao_access_token);
      if (isNewUser) {
        window.location.href = '/join';
      } else {
        window.location.href = '/login/complete';
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    if (window) {
      const code = getURLparams(window.location);
      code && login(code);
    }
  }, []);

  return (
    <AbsoluteCenterStyled>
      <Loading />
    </AbsoluteCenterStyled>
  );
}

const getURLparams = (location: Location) => {
  const params = new URLSearchParams(location.search);

  const name = params.get('code');
  return name;
};

export default withLayout(
  KakaoLogin,
  '카카오 로그인 중..',
  '카카오 로그인 중..',
);
