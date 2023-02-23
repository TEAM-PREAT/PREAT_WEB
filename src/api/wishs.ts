// const USER_ME_WISHS_URL = '/v1/users/me/wishes';

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

const RestaurantDummy: RestaurantType[] = [
  {
    id: 1,
    name: '식당1',
    address: '식당1',
    imageUrl: '/assets/images/bread.png',
    category: '베이커리',
    latitude: 36.36217624997313,
    longitude: 127.34855794364547,

    rating: {
      hasPredict: false,
      value: 2,
    },
  },
  {
    id: 2,
    name: '식당2',
    address: '식당1',
    imageUrl: '/assets/images/bread.png',
    category: '베이커리',
    latitude: 36.36140215902434,
    longitude: 127.34200303225579,

    rating: {
      hasPredict: false,
      value: 2,
    },
  },
  {
    id: 3,
    name: '식당3',
    address: '식당1',
    imageUrl: '/assets/images/bread.png',
    category: '베이커리',
    latitude: 36.361037987349484,
    longitude: 127.3432938976973,

    rating: {
      hasPredict: false,
      value: 4,
    },
  },
  {
    id: 4,
    name: '식당3',
    address: '식당1',
    imageUrl: '/assets/images/bread.png',
    category: '베이커리',
    latitude: 100,
    longitude: 100,

    rating: {
      hasPredict: false,
      value: 4,
    },
  },
  {
    id: 5,
    name: '식당3',
    address: '식당1',
    imageUrl: '/assets/images/bread.png',
    category: '베이커리',
    latitude: 100,
    longitude: 100,

    rating: {
      hasPredict: false,
      value: 4,
    },
  },
  {
    id: 6,
    name: '식당3',
    address: '식당1',
    imageUrl: '/assets/images/bread.png',
    category: '베이커리',
    latitude: 100,
    longitude: 100,

    rating: {
      hasPredict: false,
      value: 4,
    },
  },
  {
    id: 7,
    name: '식당3',
    address: '식당1',
    imageUrl: '/assets/images/bread.png',
    category: '베이커리',
    latitude: 100,
    longitude: 100,

    rating: {
      hasPredict: false,
      value: 4,
    },
  },
  {
    id: 9,
    name: '식당3',
    address: '식당1',
    imageUrl: '/assets/images/bread.png',
    category: '베이커리',
    latitude: 100,
    longitude: 100,

    rating: {
      hasPredict: false,
      value: 4,
    },
  },
];

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
  return RestaurantDummy;
};
