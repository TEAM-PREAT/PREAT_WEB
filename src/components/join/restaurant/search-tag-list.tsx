import SearchTag from '@/components/join/search-tag';
import { useState } from 'react';
import styled from 'styled-components';

const DUMMY_TAG_LIST = [
  {
    id: 'new_tag_1',
    content: 'string',
  },
  {
    id: 'new_tag_2',
    content: '김치볶음밥',
  },
  {
    id: 'new_tag_3',
    content: '김치2',
  },
];

interface SearchTagListProps {
  onAction: (obj: Record<string, string>) => void;
}

export default function SearchTagList({ onAction }: SearchTagListProps) {
  const [tagList, setTagList] = useState(DUMMY_TAG_LIST);
  return (
    <>
      <Title>다른 사용자가 많이 찾고있어요!</Title>
      <ListWrapper>
        {tagList.map((tagData) => {
          const handleClick = () => {
            console.log('tagData: ', tagData);
            onAction(tagData);
          };

          return (
            <SearchTag
              id={tagData.id}
              content={tagData.content}
              onClick={handleClick}
            />
          );
        })}
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
