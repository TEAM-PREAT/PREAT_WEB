import axios from 'axios';
import qs from 'qs';

const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;

const KAKAO_HOST = 'https://kauth.kakao.com';

const KAKAO_LOGIN_PATH = `${KAKAO_HOST}/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const TOKEN_PATH = KAKAO_HOST + '/oauth/token';

const login = () => {
  window.location.href = KAKAO_LOGIN_PATH;
};
export default login;
