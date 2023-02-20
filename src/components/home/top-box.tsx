import HamburgerIcon from '@/components/icons/hamburger-icon';
import ListIcon from '@/components/icons/list-icon';
import SearchInput from '@/components/search-input';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

function TopBox() {
  const [keyword, setKeyword] = useState('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <Wrapper>
      <TopWrapper>
        <ListIcon />
        <Title>지도</Title>
        <HamburgerIcon />
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
