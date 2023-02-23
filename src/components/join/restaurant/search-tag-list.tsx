import { RestaurantType } from '@/api/wishs';
import SearchTag from '@/components/join/restaurant/search-tag';
import styled from 'styled-components';

interface SearchTagListProps {
  onAction: (obj: RestaurantType) => void;
  list: RestaurantType[];
}

export default function SearchTagList({ onAction, list }: SearchTagListProps) {
  return (
    <>
      <Title>다른 사용자가 많이 찾고있어요!</Title>
      <ListWrapper>
        {list.map((tagData) => (
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
