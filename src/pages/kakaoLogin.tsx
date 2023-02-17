import { getToken } from '@/api';
import { useEffect } from 'react';

const getURLparams = (location: Location) => {
  const params = new URLSearchParams(location.search);

  const name = params.get('code');
  return name;
};

const tokenSetting = async (code: string) => {
  const data = await getToken(code);
  console.log('data: ', data);

  window.location.href = '/';
  //   {
  //     "access_token": "kp_JNl4LYdPKq9YSTzSjtUj1fV42s6a7Be_uEnnvCiolUwAAAYZaOZ2Y",
  //     "token_type": "bearer",
  //     "refresh_token": "kocQfpkths_8zJhEwDlWdylq25nLpZ7eImrFUHsRCiolUwAAAYZaOZ2W",
  //     "expires_in": 21599,
  //     "scope": "account_email profile_image profile_nickname",
  //     "refresh_token_expires_in": 5183999
  // }
  // if (data) {
  // }
};

function KakaoLogin() {
  useEffect(() => {
    if (window) {
      const code = getURLparams(window.location);
      if (code) {
        console.log('code: ', code);
        localStorage.setItem('code', code);

        tokenSetting(code);
      }
    }
  }, []);

  return <div>KakaoLogin</div>;
}

export default KakaoLogin;
