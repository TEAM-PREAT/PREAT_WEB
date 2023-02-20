import withLayout from '@/hoc/withLayout';
import Home from '@/components/home';

function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}

export default withLayout(Home, 'home', 'home');
