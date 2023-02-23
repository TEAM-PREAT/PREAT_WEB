import { RestaurantType } from '@/api/types';

export enum StepStatus {
  Nickname,
  NicknameComplete,
  Hate,
  Tastes,
  Restaurant,
  Final,
}

export interface ReviewType {
  restaurantId: number;
  rating: number;
}

export interface SettingValueListType {
  nickname: string;
  salty: number;
  sweet: number;
  spicy: number;
  hateFoods: number[];
  reviews: ReviewType[];
}

export const INIT_SETTING_VALUES = {
  nickname: '',
  salty: 0,
  sweet: 0,
  spicy: 0,
  hateFoods: [],
  reviews: [],
};

export interface StepStatueProps {
  onNextStep: (...arg: any) => void;
  onPrevStep: () => void;
}
export interface RestaurantItemType {
  id: number;
  name: string;
  type: string;
  location: string;
  src?: string;
}

export interface RestaurantScoreItemType extends RestaurantType {
  score: number;
}

export const SEARCH_DUMMY: RestaurantItemType[] = [
  {
    id: 11,
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
    src: '/assets/images/bread.png',
  },
  {
    id: 22,
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
  },
  {
    id: 33,
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
  },
];
