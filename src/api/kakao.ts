import axios from 'axios';
import qs from 'qs';

const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;

const KAKAO_HOST = 'https://kauth.kakao.com';

const KAKAO_LOGIN_PATH = `${KAKAO_HOST}/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const TOKEN_PATH = KAKAO_HOST + '/oauth/token';

const kakaoLogin = () => {
  window.location.href = KAKAO_LOGIN_PATH;
};

export const getToken = async (code: string) => {
  try {
    const data = {
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
    };
    const res = await axios({
      method: 'post',
      url: TOKEN_PATH,
      data: qs.stringify(data),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });
    return res.data;
  } catch (error) {
    console.log('error: ', error);
  }
};

export const tokenSetting = async (code: string) => {
  const data = await getToken(code);

  return data?.access_token;
};

export default kakaoLogin;
