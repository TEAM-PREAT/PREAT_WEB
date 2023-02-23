import { authenticationRequest, request, requestPOST } from '@/api';
import {
  JOIN_SETTING_VALUE_KEY,
  removeStorage,
  setStorage,
} from '@/utils/storage';
const LOGIN_PATH = '/v1/auth/login';
const SIGNUP_URL = '/v1/auth/signup';

interface LoginProps {
  platform: 'kakao';
  socialToken: string;
}

interface ReviewType {
  restaurantId: number;
  rating: number;
}

interface SignupRequestType {
  nickname: string;
  sweet: number;
  spicy: number;
  salty: number;
  hateFoods: number[];
  reviews: ReviewType[];
}

export const signup = async (data: SignupRequestType) => {
  try {
    const response = await authenticationRequest.post(SIGNUP_URL, data);
    console.log('response: ', response);
    removeStorage(JOIN_SETTING_VALUE_KEY);
    const userId = response.data.data;
    setStorage('userId', userId);

    return response;
  } catch (error) {
    console.log('error: ', error);
  }
};

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
