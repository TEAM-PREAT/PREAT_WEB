import NickNameInputPage from '@/components/join/nickname';
import NicknameSettingComplete from '@/components/join/nickname/setting-complete';
import TasteSetting from '@/components/join/tasty';
import withLayout from '@/hoc/withLayout';
import { useState } from 'react';

type StepStatusType = 'nickname' | 'nickname-setting-complete' | 'tastes';

function JoinPage() {
  const [step, setStep] = useState<StepStatusType>('tastes');
  const [settingValues, setSettingValues] = useState<Record<string, unknown>>();

  const handleStep = (
    step: StepStatusType,
    newSettingValues: Record<string, unknown>,
  ) => {
    setStep(step);
    setSettingValues({ ...settingValues, ...newSettingValues });
  };

  const handleTasteNextStep = (spicyStep: number, sugarStep: number) => {
    handleStep('nickname-setting-complete', { spicyStep, sugarStep });
  };

  if (step === 'nickname') {
    return (
      <NickNameInputPage
        onNextStep={() => handleStep('nickname-setting-complete', {})}
      />
    );
  }
  if (step === 'nickname-setting-complete') {
    return (
      <NicknameSettingComplete
        onNextStep={() => handleStep('nickname-setting-complete', {})}
      />
    );
  }

  return <TasteSetting onNextStep={handleTasteNextStep} />;
}

export default withLayout(JoinPage, '회원가입', '회원가입', false);
