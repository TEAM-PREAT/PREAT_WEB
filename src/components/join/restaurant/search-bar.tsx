import { SignupSearchRestaurantAPI } from '@/api/search';
import { RestaurantType } from '@/api/types';
import SearchBackIcon from '@/components/icons/search-back-icon';
import SearchIcon from '@/components/icons/search-icon';
import SearchList from '@/components/join/restaurant/search-list';
import SearchTagList from '@/components/join/restaurant/search-tag-list';
import { MaxItemContainer } from '@/styles/core';
import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  searchModeOn: () => void;
  searchModeOff: () => void;
  isSearchMode: boolean;
  onAction: (obj: RestaurantType) => void;
}

export default function SearchBar({
  searchModeOn,
  isSearchMode,
  onAction,
  searchModeOff,
}: SearchBarProps) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [list, setList] = useState<RestaurantType[]>([]);

  const searchRestaurant = async (keyword: string) => {
    const data = await SignupSearchRestaurantAPI(keyword);
    setList(data);
  };

  const isShowTagList = searchKeyword === '';

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    searchRestaurant(e.target.value);
  };

  useEffect(() => {
    searchRestaurant('');
  }, []);

  return (
    <MaxItemContainer>
      <InputWrapper>
        <Input
          value={searchKeyword}
          onChange={onInputChange}
          onFocus={searchModeOn}
          placeholder="맛집을 검색해보세요"
        />
        <SearchBackIconWrapper onClick={searchModeOff}>
          <SearchBackIcon />
        </SearchBackIconWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </InputWrapper>
      {isSearchMode &&
        (isShowTagList ? (
          <SearchTagList onAction={onAction} list={list} />
        ) : (
          <SearchList onAction={onAction} list={list} />
        ))}
    </MaxItemContainer>
  );
}

const InputWrapper = styled.div`
  width: 290px;
  height: 34px;
  margin: 5px auto;
  background: #f7f7f7;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  position: relative;
`;

const SearchBackIconWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;
const SearchIconWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
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

  &::placeholder {
    font-weight: 500;
    font-size: 10px;

    color: #8b8b8b;
  }

  &:focus {
    background: #ffffff;
  }
`;
