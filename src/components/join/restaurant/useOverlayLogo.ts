import { useState } from 'react';

export default function useOverlayLogo(time: number) {
  const [isVisibleLogo, setIsVisibleLogo] = useState(false);

  const handleVisibleLogo = () => {
    setIsVisibleLogo(true);
    setTimeout(() => setIsVisibleLogo(false), time);
  };

  return { isVisibleLogo, handleVisibleLogo };
}
