// const USER_ME_WISHS_URL = '/v1/users/me/wishes';

import { authenticationRequest } from '@/api';
const MY_LIST = '/v1/users/me/mylist';

interface MapItemType {
  me: RestaurantType[];
  wish: RestaurantType[];
  friend: FriendRestaurantType[];
}

export interface RestaurantType {
  id: number;
  name: string;
  address: string;
  imageUrl: string;
  category: string;
  latitude: number;
  longitude: number;

  rating: {
    hasPredict: boolean; // 예상 별점 존재 유무
    value: number; //  예상 별점 or 평가 별점
  };

  // 내가 평가한 리뷰가 존재하면 hasPredict 는 false + 예상 별점 null + 평가 별점
  // 내가 평가한 리뷰가 없으면 hasPredict true + 예상 별점 + 평가 별점 null
}

export interface FriendRestaurantType extends RestaurantType {
  friend: string;
}

// export interface FriendRestaurantType {
//   id: number;
//   nickname: string;
//   imageUrl: string;
//   restaurant: RestaurantType[];
// }

export const getWishRestaurantListAPI = async (): Promise<RestaurantType[]> => {
  return RestaurantPredictDummy;
};

export const getFriendRestaurantListAPI = async (): Promise<
  FriendRestaurantType[]
> => {
  return RestaurantFriendDummy;
};

export const getMyReviewRestaurantListAPI = async (): Promise<
  RestaurantType[]
> => {
  // return RestaurantDummy;
  const response = await authenticationRequest.get(MY_LIST);

  if (response.status === 200) {
    return response.data.data;
  }

  throw new Error();
};

const RestaurantPredictDummy: RestaurantType[] = [
  {
    id: 21,
    name: '식당1',
    address: '식당1',
    imageUrl: '/assets/images/bread.png',
    category: '베이커리',
    latitude: 100,
    longitude: 100,

    rating: {
      hasPredict: true,
      value: 2,
    },
  },
  {
    id: 22,
    name: '식당2',
    address: '식당1',
    imageUrl: '/assets/images/bread.png',
    category: '베이커리',
    latitude: 100,
    longitude: 100,

    rating: {
      hasPredict: true,
      value: 2,
    },
  },
  {
    id: 31,
    name: '식당3',
    address: '식당1',
    imageUrl: '/assets/images/bread.png',
    category: '베이커리',
    latitude: 100,
    longitude: 100,

    rating: {
      hasPredict: true,
      value: 4,
    },
  },
];

const RestaurantFriendDummy: FriendRestaurantType[] = [
  {
    id: 21,
    name: '식당1',
    address: '식당1',
    imageUrl: '/assets/images/bread.png',
    category: '베이커리',
    latitude: 100,
    longitude: 100,
    friend: '민정',

    rating: {
      hasPredict: true,
      value: 2,
    },
  },
  {
    id: 22,
    name: '식당2',
    address: '식당1',
    imageUrl: '/assets/images/bread.png',
    category: '베이커리',
    latitude: 100,
    longitude: 100,
    friend: '민정2',

    rating: {
      hasPredict: true,
      value: 2,
    },
  },
  {
    id: 31,
    name: '식당3',
    address: '식당1',
    imageUrl: '/assets/images/bread.png',
    category: '베이커리',
    latitude: 100,
    longitude: 100,
    friend: '민정4',

    rating: {
      hasPredict: true,
      value: 4,
    },
  },
];
