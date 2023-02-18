import axios from 'axios';

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
