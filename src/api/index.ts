import axios, { AxiosError } from 'axios';

const BASE_PATH =
  'http://ec2-13-125-9-110.ap-northeast-2.compute.amazonaws.com:8080';

export const requestPOST = async (url: string, data: unknown) => {
  try {
    const res = await axios({
      method: 'post',
      url: `${BASE_PATH}${url}`,
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const authenticationRequest = axios.create({
  baseURL: BASE_PATH,
});

export const request = axios.create({
  baseURL: BASE_PATH,
});

request.interceptors.response.use(
  function (response) {
    return response;
  },

  async function (error: unknown) {
    if (error instanceof AxiosError) {
      const { response } = error;

      if (response != null) {
        alert(response.data.message);
        switch (response.status) {
          case 401:
          default:
            return await Promise.reject(error);
        }
      }
    }
    return await Promise.reject(error);
  },
);
