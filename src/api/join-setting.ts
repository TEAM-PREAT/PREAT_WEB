import { authenticationRequest, request } from '@/api';
import { RestaurantType } from '@/api/types';

const GET_HATE_FOOD_LIST_URL = '/v1/dislikes';
const CHECK_NICKNAME_URL = '/v1/auth/nickname/check';
const RESTAURANT_URL = '/v1/restaurants';

export interface HateFoodType {
  food: string;
  id: number;
  imgUrl: string;
}

export const getHateFoodAPI = async (): Promise<HateFoodType[]> => {
  const response = await request.get(GET_HATE_FOOD_LIST_URL);
  if (response.status === 200) {
    return response.data.data;
  }
  throw new Error();
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

interface GetRestaurantsReturnType {
  address: string;
  category: string;
  id: number;
  imageUrl: string;
  latitude: number;
  longitude: number;
  name: string;
  rating: number;
}

export type JoinRestaurantType = GetRestaurantsReturnType;
export const getRestaurantsAPI = async (): Promise<
  GetRestaurantsReturnType[]
> => {
  const response = await request.get(RESTAURANT_URL);
  if (response.status === 200) {
    // const res: RestaurantType[] = results.map(
    //   ({
    //     restaurantId,
    //     restaurantName,
    //     imgUrl,
    //     ...rest
    //   }: {
    //     restaurantId: number;
    //     restaurantName: string;
    //     imgUrl: string;
    //   }) => ({
    //     ...rest,
    //     id: restaurantId,
    //     name: restaurantName,
    //     rating: { value: 0 },
    //     imageUrl: imgUrl,
    //   }),
    // );
    // return res;

    return response.data.data;
  }
  throw new Error();
};
