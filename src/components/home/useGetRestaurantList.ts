import {
  getWishRestaurantListAPI,
  getMyReviewRestaurantListAPI,
  RestaurantType,
  getFriendRestaurantListAPI,
  FriendRestaurantType,
} from '@/api/wishs';
import { useCallback, useEffect, useState } from 'react';

interface UseGetRestaurantListReturns {
  wishs: RestaurantType[];
  mys: RestaurantType[];
  friends: FriendRestaurantType[];
  reload: () => void;
}

export default function useGetRestaurantList(): UseGetRestaurantListReturns {
  const [wishs, setWishs] = useState<RestaurantType[]>([]);
  const [mys, setMys] = useState<RestaurantType[]>([]);
  const [friends, setFriends] = useState<FriendRestaurantType[]>([]);

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

  const reload = useCallback(() => {
    getWishRestaurantList();
    getMyReviewRestaurantList();
    getFriendRestaurantList();
  }, []);
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
    reload,
  };
}
