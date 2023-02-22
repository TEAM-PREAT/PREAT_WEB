import { authenticationRequest } from '@/api';

const RESTAURANT_SEARCH_URL = '/v1/search/restaurants';

interface SearchRestaurantReturnType {
  hasResults: boolean;
  results: unknown[];
}

export const searchRestaurantAPI = async (
  keyword: string,
): Promise<SearchRestaurantReturnType> => {
  const response = await authenticationRequest.get(
    `${RESTAURANT_SEARCH_URL}?keyword=${keyword}`,
  );
  if (response.status === 200) {
    return response.data.data;
  }
  throw new Error();
};

export const getOtherManySearchAPI =
  async (): Promise<SearchRestaurantReturnType> => {
    const response = await authenticationRequest.get(
      `${RESTAURANT_SEARCH_URL}?keyword=''`,
    );
    if (response.status === 200) {
      return response.data.data;
    }
    throw new Error();
  };
