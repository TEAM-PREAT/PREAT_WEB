import { request } from '@/api';

const GET_HATE_FOOD_LIST_URL = '/v1/dislikes';
const CHECK_NICKNAME_URL = '/v1/auth/nickname/check';

export interface HateFoodType {
  food: string;
  id: number;
  imgUrl: string;
}

export const getHateFoodAPI = async () => {
  try {
    const response = await request.get(GET_HATE_FOOD_LIST_URL);
    if (response.status === 200) {
      return response.data.data;
    }
    throw new Error();
  } catch (error) {
    console.log('error: ', error);
  }
};

export const checkNicknameAPI = async (nickname: string) => {
  try {
    const response = await request.get(
      `${CHECK_NICKNAME_URL}?nickname=${nickname}`,
    );
    if (response.status === 200) {
      return response.data.data;
    }
    throw new Error();
  } catch (error) {
    console.log('error: ', error);
  }
};
