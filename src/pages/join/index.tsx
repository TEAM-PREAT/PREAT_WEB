import NickNameInputPage from '@/components/join/nickname';
import NicknameSettingComplete from '@/components/join/nickname/setting-complete';
import withLayout from '@/hoc/withLayout';
import { useState } from 'react';

type StepStatusType = 'nickname-setting' | 'nickname-setting-complete';

function JoinPage() {
  const [step, setStep] = useState<StepStatusType>('nickname-setting');

  const handleStep = (step: StepStatusType) => {
    setStep(step);
  };

  if (step === 'nickname-setting') {
    return (
      <NickNameInputPage
        onNextStep={() => handleStep('nickname-setting-complete')}
      />
    );
  }
  if (step === 'nickname-setting-complete') {
    return (
      <NicknameSettingComplete
        onNextStep={() => handleStep('nickname-setting-complete')}
      />
    );
  }

  return (
    <NicknameSettingComplete
      onNextStep={() => handleStep('nickname-setting-complete')}
    />
  );
}

export default withLayout(JoinPage, '회원가입', '회원가입', false);
