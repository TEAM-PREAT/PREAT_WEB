import SearchTag from '@/components/join/restaurant/search-tag';
import { RestaurantItemType, SEARCH_DUMMY } from '@/components/join/types';
import { useState } from 'react';
import styled from 'styled-components';

interface SearchTagListProps {
  onAction: (obj: RestaurantItemType) => void;
}

export default function SearchTagList({ onAction }: SearchTagListProps) {
  const [tagList, setTagList] = useState(SEARCH_DUMMY);

  return (
    <>
      <Title>다른 사용자가 많이 찾고있어요!</Title>
      <ListWrapper>
        {tagList.map((tagData) => (
          <SearchTag
            key={tagData.id}
            {...tagData}
            onClick={() => onAction(tagData)}
          />
        ))}
      </ListWrapper>
    </>
  );
}

const Title = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 34px;

  color: #ff6c3e;
  margin-top: 15px;
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
