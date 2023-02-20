import Hate from '@/components/join/hate';
import NickNameInputPage from '@/components/join/nickname';
import NicknameSettingComplete from '@/components/join/nickname/setting-complete';
import RestaurantEvaluating from '@/components/join/restaurant';
import TasteSetting from '@/components/join/tasty';
import withLayout from '@/hoc/withLayout';
import {
  getStorage,
  JOIN_SETTING_VALUE_KEY,
  JOIN_STEP_KEY,
  setStorage,
} from '@/utils/storage';
import { useEffect, useState } from 'react';

enum StepStatus {
  nickname,
  nicknameComplete,
  hate,
  tastes,
  restaurant,
  final,
}

type StepStatusType =
  | 'nickname'
  | 'nickname-complete'
  | 'hate'
  | 'tastes'
  | 'restaurant'
  | 'final';

interface ReviewType {
  restaurantId: number;
  rating: number;
}

interface SettingValueListType {
  nickname: string;
  salty: number;
  sweet: number;
  spicy: number;
  hateFoods: number[];
  reviews: ReviewType[];
}

const INIT_SETTING_VALUES = {
  nickname: ' ',
  salty: 0,
  sweet: 0,
  spicy: 0,
  hateFoods: [],
  reviews: [],
};

function JoinPage() {
  const [step, setStep] = useState<StepStatusType>('nickname');
  const [settingValues, setSettingValues] =
    useState<SettingValueListType>(INIT_SETTING_VALUES);

  const handleStep = (
    step: StepStatusType,
    newSettingValues: Record<string, unknown>,
  ) => {
    setStep(step);

    const newSettingValueTemp = { ...settingValues, ...newSettingValues };
    setSettingValues(newSettingValueTemp);
    setStorage(JOIN_SETTING_VALUE_KEY, newSettingValueTemp);
    setStorage(JOIN_STEP_KEY, step);
  };

  const handleNickNameNextStep = (nickname: string) => {
    handleStep('nickname-complete', { nickname });
  };

  const handleHateNextStep = (hateFoods: number[]) => {
    handleStep('tastes', { hateFoods });
  };

  const handleTasteNextStep = (spicyStep: number, sugarStep: number) => {
    handleStep('restaurant', { spicyStep, sugarStep });
  };

  useEffect(() => {
    const initSettingValue = getStorage(JOIN_SETTING_VALUE_KEY);
    const initStep = getStorage(JOIN_STEP_KEY);
    console.log('initSettingValue: ', initSettingValue);

    setSettingValues(initSettingValue);
    setStep(initStep);
  }, []);

  switch (step) {
    case 'nickname':
      return <NickNameInputPage onNextStep={handleNickNameNextStep} />;
    case 'nickname-complete':
      return (
        <NicknameSettingComplete
          nickname={settingValues?.nickname ?? ''}
          onNextStep={() => setStep('hate')}
          onPrevStep={() => setStep('nickname')}
        />
      );
    case 'hate':
      return <Hate onNextStep={handleHateNextStep} />;
    case 'tastes':
      return <TasteSetting onNextStep={handleTasteNextStep} />;

    default:
      return <RestaurantEvaluating />;
  }
}

export default withLayout(JoinPage, '회원가입', '회원가입', false);
