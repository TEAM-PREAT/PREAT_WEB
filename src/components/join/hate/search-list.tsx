import { DUMMY } from '@/components/join/hate';
import styled from 'styled-components';
import SearchItem from '@/components/join/search-item';
interface SearchListProps {
  onAction: (obj: Record<string, string>) => void;
}

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
