import styled from 'styled-components';
import SearchItem from '@/components/join/search-item';
interface SearchListProps {
  onAction: (obj: Record<string, string>) => void;
}
const DUMMY = [
  {
    key: '1',
    label: 'food item',
    src: '/assets/images/pine.png',
  },
  {
    key: '2',
    label: 'food item',
    src: '/assets/images/pine.png',
  },
  {
    key: '3',
    label: 'food item',
    src: '/assets/images/pine.png',
  },
  {
    key: '4',
    label: 'food item',
  },
];

export default function SearchList({ onAction }: SearchListProps) {
  return (
    <ListWrapper>
      {DUMMY.map(({ key, label }) => (
        <SearchItem
          content={label}
          onClick={() => onAction({ key: key, label })}
        />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  margin-top: 20px;
`;
