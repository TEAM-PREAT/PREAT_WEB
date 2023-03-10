import SearchInput from '@/components/common/search-input';
import HamburgerIcon from '@/components/icons/hamburger-icon';
import ListIcon from '@/components/icons/list-icon';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface TopBoxProps {
  onSidebarOpen: () => void;
}
function TopBox({ onSidebarOpen }: TopBoxProps) {
  const router = useRouter();

  const [keyword, setKeyword] = useState('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);

    // TODO
    alert('검색 기능은 추후에 추가될 예정입니다.');
  };

  return (
    <Wrapper>
      <TopWrapper>
        <span onClick={() => router.push('/list')}>
          <ListIcon />
        </span>
        <Title>지도</Title>
        <span onClick={onSidebarOpen}>
          <HamburgerIcon />
        </span>
      </TopWrapper>
      <InputWrapper>
        <SearchInput
          value={keyword}
          onChange={onInputChange}
          placeholder="어디로 가실건가요?"
        />
      </InputWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    173.79deg,
    #ffffff 25.1%,
    rgba(255, 255, 255, 0.516129) 79.51%,
    rgba(255, 255, 255, 0) 93.38%
  );

  padding: 30px 32px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
`;

const InputWrapper = styled.div`
  margin: 20px auto;
`;
export default TopBox;
