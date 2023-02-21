import styled from 'styled-components';
import SearchItem from '@/components/join/restaurant/search-item';
import { RestaurantItemType, SEARCH_DUMMY } from '@/components/join/types';

interface SearchListProps {
  onAction: (obj: RestaurantItemType) => void;
}

export default function SearchList({ onAction }: SearchListProps) {
  return (
    <ListWrapper>
      {SEARCH_DUMMY.map((item) => (
        <SearchItem key={item.id} {...item} onClick={() => onAction(item)} />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  margin-top: 20px;
`;
