import withLayout from '@/hoc/withLayout';
import Map from '@/components/map';
import { NextPage } from 'next/types';
import Home from '@/components/home';

function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}

export default withLayout(Home, 'home', 'home');
