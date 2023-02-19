import { DUMMY } from '@/components/join/hate';
import SmallSearchIcon from '@/components/icons/small-search-icon';
import styled from 'styled-components';
interface SearchListProps {
  onAction: (key: string, content: string) => void;
}

export default function SearchList({ onAction }: SearchListProps) {
  return (
    <ListWrapper>
      {DUMMY.map(({ key, label }) => (
        <SearchItem
          content={label}
          onClick={() => onAction(`${key}1`, label)}
        />
      ))}
    </ListWrapper>
  );
}

function SearchItem({
  content,
  onClick,
}: {
  content: string;
  onClick: () => void;
}) {
  return (
    <ItemWrapper onClick={onClick}>
      <SmallSearchIcon />
      <span>{content}</span>
    </ItemWrapper>
  );
}

const ListWrapper = styled.div`
  margin-top: 20px;
`;

const ItemWrapper = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid #bcbcbc;
  gap: 17px;
  padding-left: 8px;
  span {
    font-weight: 500;
    font-size: 15px;
    line-height: 34px;
  }
`;
