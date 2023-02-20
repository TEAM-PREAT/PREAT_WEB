import { request } from '@/api';

const GET_HATE_FOOD_LIST_PATH = '/v1/hatefoods';

export interface HateFoodType {
  food: string;
  id: number;
  imgUrl: string;
}

export const getHateFoodAPI = async () => {
  try {
    const response = await request.get(GET_HATE_FOOD_LIST_PATH);
    if (response.status === 200) {
      return response.data.data;
    }
    throw new Error();
  } catch (error) {
    console.log('error: ', error);
  }
};
