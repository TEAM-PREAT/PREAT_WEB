import {
  getWishRestaurantListAPI,
  getMyReviewRestaurantListAPI,
  RestaurantType,
  getFriendRestaurantListAPI,
} from '@/api/wishs';
import { useEffect, useState } from 'react';

interface UseGetRestaurantListReturns {
  wishs: RestaurantType[];
  mys: RestaurantType[];
  friends: RestaurantType[];
}

export default function useGetRestaurantList(): UseGetRestaurantListReturns {
  const [wishs, setWishs] = useState<RestaurantType[]>([]);
  const [mys, setMys] = useState<RestaurantType[]>([]);
  const [friends, setFriends] = useState<RestaurantType[]>([]);

  const getWishRestaurantList = async () => {
    const res = await getWishRestaurantListAPI();
    setWishs(res);
  };
  const getMyReviewRestaurantList = async () => {
    const res = await getMyReviewRestaurantListAPI();
    setMys(res);
  };

  const getFriendRestaurantList = async () => {
    const res = await getFriendRestaurantListAPI();
    setFriends(res);
  };

  useEffect(() => {
    // TODO : loading 추가
    getWishRestaurantList();
    getMyReviewRestaurantList();
    getFriendRestaurantList();
  }, []);

  return {
    wishs,
    mys,
    friends,
  };
}
