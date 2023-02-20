import SearchList from '@/components/join/hate/search-list';
import SearchTagList from '@/components/join/hate/search-tag-list';
import SearchIcon from '@/components/icons/search-icon';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import SearchInput from '@/components/search-input';

interface SearchBarProps {
  isSearchMode: boolean;
  handleSearchMode: () => void;
  onAction: (key: string, content: string) => void;
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
      <SearchInput
        value={searchKeyword}
        onChange={onInputChange}
        onFocus={handleSearchMode}
      />

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
