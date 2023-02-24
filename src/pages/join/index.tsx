import Hate from '@/components/join/hate';
import NickNameInputPage from '@/components/join/nickname';
import NicknameSettingComplete from '@/components/join/nickname/setting-complete';
import RestaurantEvaluating from '@/components/join/restaurant';
import TasteSetting from '@/components/join/tasty';
import withLayout from '@/hoc/withLayout';
import {
  INIT_SETTING_VALUES,
  ReviewType,
  SettingValueListType,
  StepStatus,
} from '@/components/join/types';
import {
  getStorage,
  JOIN_SETTING_VALUE_KEY,
  JOIN_STEP_KEY,
  setStorage,
} from '@/utils/storage';
import { useEffect, useState } from 'react';
import Final from '@/components/join/final';
import { signup } from '@/api/auth';
import { useRouter } from 'next/router';

function JoinPage() {
  const [step, setStep] = useState<StepStatus>(0);
  const [settingValues, setSettingValues] =
    useState<SettingValueListType>(INIT_SETTING_VALUES);
  const router = useRouter();

  const handleNextStep = (newSettingValues?: Record<string, unknown>) => {
    const nextStep = step + 1;
    setStep(nextStep);
    setStorage(JOIN_STEP_KEY, nextStep);

    if (newSettingValues) {
      const newSettingValueTemp = { ...settingValues, ...newSettingValues };
      setSettingValues(newSettingValueTemp);
      setStorage(JOIN_SETTING_VALUE_KEY, newSettingValueTemp);
    }
  };

  const handlePrevStep = () => {
    const prevStep = step - 1;

    setStep(prevStep);
    setStorage(JOIN_STEP_KEY, prevStep);
  };

  const handleNickNameNextStep = (nickname: string) => {
    handleNextStep({ nickname });
  };

  const handleHateNextStep = (hateFoods: number[]) => {
    handleNextStep({ hateFoods });
  };

  const handleTasteNextStep = (spicyStep: number, sugarStep: number) => {
    // TODO:
    handleNextStep({ spicy: spicyStep, sugar: sugarStep * 20 });
  };

  const handleRestaurantNextStep = (reviews: ReviewType[]) => {
    handleNextStep({ reviews });
  };

  const handleSubmit = async () => {
    const value = getStorage(JOIN_SETTING_VALUE_KEY);

    await signup(value);
    router.push('/home');
  };

  useEffect(() => {
    const initSettingValue =
      getStorage(JOIN_SETTING_VALUE_KEY) ?? INIT_SETTING_VALUES;
    const initStep = getStorage(JOIN_STEP_KEY) ?? 0;

    setSettingValues(initSettingValue);
    setStep(initStep);
  }, []);

  switch (step) {
    case StepStatus.Nickname:
      return <NickNameInputPage onNextStep={handleNickNameNextStep} />;
    case StepStatus.NicknameComplete:
      return (
        <NicknameSettingComplete
          nickname={settingValues?.nickname ?? ''}
          onNextStep={() => handleNextStep()}
          onPrevStep={handlePrevStep}
        />
      );
    case StepStatus.Hate:
      return (
        <Hate onNextStep={handleHateNextStep} onPrevStep={handlePrevStep} />
      );

    case StepStatus.Tastes:
      return (
        <TasteSetting
          onNextStep={handleTasteNextStep}
          onPrevStep={handlePrevStep}
        />
      );

    case StepStatus.Restaurant:
      return (
        <RestaurantEvaluating
          onNextStep={handleRestaurantNextStep}
          onPrevStep={handlePrevStep}
        />
      );
    default:
      return <Final onAction={handleSubmit} />;
  }
}

export default withLayout(JoinPage, '회원가입', '회원가입', false);
