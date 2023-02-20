import styled from 'styled-components';
import SearchItem from '@/components/join/restaurant/search-item';
interface SearchListProps {
  onAction: (obj: Record<string, string>) => void;
}
const DUMMY = [
  {
    id: '1',
    label: 'food item',
    src: '/assets/images/pine.png',
  },
  {
    id: '2',
    label: 'food item',
    src: '/assets/images/pine.png',
  },
  {
    id: '3',
    label: 'food item',
    src: '/assets/images/pine.png',
  },
  {
    id: '4',
    label: 'food item',
  },
];

export default function SearchList({ onAction }: SearchListProps) {
  return (
    <ListWrapper>
      {DUMMY.map(({ id, label }) => (
        <SearchItem
          content={label}
          onClick={() => onAction({ id: id, label })}
        />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  margin-top: 20px;
`;
