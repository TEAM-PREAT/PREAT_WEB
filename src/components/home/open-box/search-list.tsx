import styled from 'styled-components';
import SearchItem from '@/components/join/restaurant/search-item';
import { RestaurantItemType, SEARCH_DUMMY } from '@/components/join/types';
import { RestaurantType } from '@/api/types';

interface SearchListProps {
  onAction: (obj: RestaurantType) => void;
  list: RestaurantType[];
}

export default function SearchList({ onAction, list }: SearchListProps) {
  return (
    <ListWrapper>
      {list.map((item) => (
        <SearchItem key={item.id} {...item} onClick={() => onAction(item)} />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  margin-top: 20px;
`;
