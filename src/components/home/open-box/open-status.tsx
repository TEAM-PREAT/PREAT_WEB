import ToggleNav from '@/components/home/open-box/togggle-nav';
import { CurrentStep } from '@/components/home/types';
import { useState } from 'react';

export default function OpenStatus() {
  const [current, setCurrent] = useState<CurrentStep>(0);

  const handleCurrent = (next: CurrentStep) => {
    setCurrent(next);
  };
  return (
    <div>
      <ToggleNav current={current} handleCurrent={handleCurrent} />
    </div>
  );
}
