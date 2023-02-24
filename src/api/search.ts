import { authenticationRequest, request } from '@/api';
import { RestaurantType } from '@/api/types';

const RESTAURANT_SEARCH_URL = '/v1/search/restaurants';
const SIGN_IN_RESTAURANT_SEARCH_URL = '/v1/signup/search/restaurants';

export interface SearchRestaurantReturnType {
  hasResults: boolean;
  results: RestaurantType[];
}

export const searchRestaurantAPI = async (
  keyword: string,
): Promise<RestaurantType[]> => {
  const response = await authenticationRequest.get(
    `${RESTAURANT_SEARCH_URL}?query=${keyword}`,
  );

  if (response.status === 200) {
    return response.data.data ?? [];
  }
  throw new Error();
};

export const SignupSearchRestaurantAPI = async (keyword: string) => {
  // TODO : 해야댐
  const response = await request.get(
    `${SIGN_IN_RESTAURANT_SEARCH_URL}?query=${keyword}`,
  );
  if (response.status === 200) {
    return response.data.data ?? [];
  }
  throw new Error();
};
