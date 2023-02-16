import { getToken } from '@/api';
import { useEffect } from 'react';

const getURLparams = (location: Location) => {
  const params = new URLSearchParams(location.search);

  const name = params.get('code');
  return name;
};

function KakaoLogin() {
  useEffect(() => {
    if (window) {
      const code = getURLparams(window.location);
      if (code) {
        console.log('code: ', code);
        localStorage.setItem('code', code);
      }
    }
  }, []);

  return <div>KakaoLogin</div>;
}
