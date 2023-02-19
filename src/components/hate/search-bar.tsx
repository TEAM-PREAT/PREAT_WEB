import SearchIcon from '@/components/icons/search-icon';
import styled from 'styled-components';

export default function SearchBar() {
  return (
    <Wrapper>
      <Input />
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 290px;
  height: 34px;
  margin: 5px auto;
  background: #f7f7f7;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
`;

const Input = styled.input`
  background: #f7f7f7;
  width: 100%;
  height: 100%;
  border-radius: 17px;
  padding: 0 20px 0 40px;
`;
