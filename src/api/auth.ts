import { requestPOST } from '@/api';
const LOGIN_PATH = '/v1/auth/login';

interface LoginProps {
  platform: 'kakao';
  socialToken: string;
}

export const login = async ({ platform, socialToken }: LoginProps) => {
  try {
    const res = await requestPOST(LOGIN_PATH, {
      platform,
      socialToken,
    });

    return res;
  } catch (error) {
    console.log('error: ', error);
  }
};

export const requestKakaoLogin = async (kakao_access_token: string) => {
  try {
    const res = await login({
      platform: 'kakao',
      socialToken: kakao_access_token,
    });

    const { accessToken, newUser } = res.data;

    localStorage.setItem('accessToken', accessToken);

    return newUser;
  } catch (error) {
    throw new Error('로그인에 실패하셨습니다!');
  }
};
