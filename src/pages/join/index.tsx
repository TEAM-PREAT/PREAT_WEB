import Hate from '@/components/join/hate';
import NickNameInputPage from '@/components/join/nickname';
import NicknameSettingComplete from '@/components/join/nickname/setting-complete';
import RestaurantEvaluating from '@/components/join/restaurant';
import TasteSetting from '@/components/join/tasty';
import withLayout from '@/hoc/withLayout';
import {
  getStorage,
  JOIN_SETTING_VALUE_KEY,
  setStorage,
} from '@/utils/storage';
import { useEffect, useState } from 'react';

type StepStatusType =
  | 'nickname'
  | 'nickname-complete'
  | 'hate'
  | 'tastes'
  | 'restaurant'
  | 'final';

function JoinPage() {
  const [step, setStep] = useState<StepStatusType>('nickname');
  const [settingValues, setSettingValues] = useState<Record<string, unknown>>();

  const handleStep = (
    step: StepStatusType,
    newSettingValues: Record<string, unknown>,
  ) => {
    setStep(step);

    const newSettingValueTemp = { ...settingValues, ...newSettingValues };
    setSettingValues(newSettingValueTemp);
    setStorage(JOIN_SETTING_VALUE_KEY, newSettingValueTemp);
  };

  const handleNickNameNextStep = (nickname: string) => {
    handleStep('nickname-complete', { nickname });
  };

  const handleHateNextStep = (hateFoodList: string[]) => {
    handleStep('tastes', { hateFoodList });
  };

  const handleTasteNextStep = (spicyStep: number, sugarStep: number) => {
    handleStep('restaurant', { spicyStep, sugarStep });
  };

  useEffect(() => {
    const initSettingValue = getStorage(JOIN_SETTING_VALUE_KEY);
    console.log('initSettingValue: ', initSettingValue);

    setSettingValues(initSettingValue);
  }, []);

  switch (step) {
    case 'nickname':
      return <NickNameInputPage onNextStep={handleNickNameNextStep} />;
    case 'nickname-complete':
      return (
        <NicknameSettingComplete
          onNextStep={() => setStep('tastes')}
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
