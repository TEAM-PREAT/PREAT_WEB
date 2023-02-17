import NickNameInputPage from '@/components/join/nickname';
import withLayout from '@/hoc/withLayout';
import { useState } from 'react';

function JoinPage() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <NickNameInputPage />
    </div>
  );
}
export default withLayout(JoinPage, '회원가입', '회원가입', false);
