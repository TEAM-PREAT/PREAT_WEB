import SearchTag from '@/components/hate/search-tag';
import styled from 'styled-components';

export default function SearchTagList() {
  return (
    <>
      <Title>다른 사용자가 많이 찾고있어요!</Title>
      <ListWrapper>
        <SearchTag content="김치 볶음밥" />
        <SearchTag content="김치 볶음밥" />
        <SearchTag content="김치 볶음밥" />
        <SearchTag content="김치 볶음밥" />
        <SearchTag content="김치 볶음밥" />
        <SearchTag content="김치 볶음밥" />
        <SearchTag content="김치 볶음밥" />
      </ListWrapper>
    </>
  );
}

const Title = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 34px;

  color: #ff6c3e;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  min-width: 100%;
  padding: 5px 0;
  gap: 5px;
`;
