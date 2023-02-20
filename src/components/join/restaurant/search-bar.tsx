import SearchIcon from '@/components/icons/search-icon';
import SearchList from '@/components/join/restaurant/search-list';
import SearchTagList from '@/components/join/restaurant/search-tag-list';
import { RestaurantItemType } from '@/components/join/types';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  handleSearchMode: () => void;
  isSearchMode: boolean;
  onAction: (obj: RestaurantItemType) => void;
}

export default function SearchBar({
  handleSearchMode,
  isSearchMode,
  onAction,
}: SearchBarProps) {
  const [searchKeyword, setSearchKeyword] = useState('');

  const isShowTagList = searchKeyword === '';

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          value={searchKeyword}
          onChange={onInputChange}
          onFocus={handleSearchMode}
        />
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
      </InputWrapper>
      {isSearchMode &&
        (isShowTagList ? (
          <SearchTagList onAction={onAction} />
        ) : (
          <SearchList onAction={onAction} />
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const InputWrapper = styled.div`
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
  font-weight: 600;
  font-size: 15px;
  line-height: 30px;
  color: #ff6c3e;

  &:focus {
    background: #ffffff;
  }
`;
