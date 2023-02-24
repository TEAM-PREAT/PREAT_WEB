import { authenticationRequest } from '@/api';

const RESTAURANT_URL = '/v1/restaurants';
const MY_REVIEWS_URL = '/v1/users/me/reviews';
const MY_LIST = '/v1/users/me/mylist';

export const restaurantReviewCreate = async (
  restaurantId: number,
  rating: number,
) => {
  const response = await authenticationRequest.post(
    `${RESTAURANT_URL}/${restaurantId}/reviews`,
    { rating },
  );

  if (response.status === 200) {
    return response.data.data;
  }

  throw new Error();
};

export const restaurantReviewDelete = async (restaurantId: number) => {
  const response = await authenticationRequest.delete(
    `${RESTAURANT_URL}/${restaurantId}/reviews`,
  );
  if (response.status === 200) {
    return response.data.data;
  }
  throw new Error();
};

export const restaurantReviewUpdate = async (
  restaurantId: number,
  rating: number,
) => {
  const response = await authenticationRequest.patch(
    `${RESTAURANT_URL}/${restaurantId}/reviews`,
    { rating },
  );
  if (response.status === 200) {
    return response.data.data;
  }
  throw new Error();
};

export const myReviewsDelete = async (idList: number[]) => {
  const response = await authenticationRequest.patch(MY_REVIEWS_URL, {
    id: idList,
  });

  if (response.status === 200) {
    return response.data.data;
  }
  throw new Error();
};

export const getMyList = async () => {
  const response = await authenticationRequest.patch(MY_LIST);

  if (response.status === 200) {
    return response.data.data;
  }

  throw new Error();
};
