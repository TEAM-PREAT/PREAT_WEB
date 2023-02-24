import axios, { AxiosError } from 'axios';

const BASE_PATH =
  'http://ec2-13-125-9-110.ap-northeast-2.compute.amazonaws.com:8080';

export const requestPOST = async (url: string, data: unknown) => {
  const res = await axios({
    method: 'post',
    url: `${BASE_PATH}${url}`,
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.data;
};

export const authenticationRequest = axios.create({
  baseURL: BASE_PATH,
});

export const request = axios.create({
  baseURL: BASE_PATH,
});

authenticationRequest.interceptors.request.use(
  function (config) {
    const access_token = localStorage.getItem('accessToken');

    if (access_token === null) {
      alert('로그인이 필요합니다. ');
      window.location.href = '/login';

      // throw new Error('access token이 없습니다.');
    }

    config.headers['Content-Type'] = 'application/json';
    config.headers.Authorization = `Bearer ${access_token}`;
    return config;
  },
  async function (error) {
    return await Promise.reject(error);
  },
);

authenticationRequest.interceptors.response.use(
  function (response) {
    return response;
  },

  async function (error: unknown) {
    if (error instanceof AxiosError) {
      const { response } = error;

      if (response != null) {
        alert(response.data.message);
      }
    }
    return await Promise.reject(error);
  },
);

request.interceptors.response.use(
  function (response) {
    return response;
  },

  async function (error: unknown) {
    if (error instanceof AxiosError) {
      const { response } = error;

      if (response != null) {
        alert(response.data.message);
      }
    }
    return await Promise.reject(error);
  },
);
