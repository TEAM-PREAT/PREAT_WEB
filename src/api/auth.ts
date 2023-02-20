import { requestPOST } from '@/api';
import { setStorage } from '@/utils/storage';
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

    const { accessToken, isNewUser } = res.data;
    setStorage('accessToken', accessToken);
    return isNewUser;
  } catch (error) {
    throw new Error('로그인에 실패하셨습니다!');
  }
};
