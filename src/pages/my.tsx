import My from '@/components/my';
import withLayout from '@/hoc/withLayout';

function MyPage() {
  return (
    <>
      <My />
    </>
  );
}

export default withLayout(MyPage, 'mypage', 'mypage');
