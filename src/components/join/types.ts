export enum StepStatus {
  nickname,
  nicknameComplete,
  hate,
  tastes,
  restaurant,
  final,
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
  id: string;
  name: string;
  type: string;
  location: string;
  src?: string;
}

export interface RestaurantScoreItemType extends RestaurantItemType {
  score: number;
}
