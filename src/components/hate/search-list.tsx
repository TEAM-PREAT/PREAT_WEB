import SmallSearchIcon from '@/components/icons/small-search-icon';
import styled from 'styled-components';

export default function SearchList() {
  return (
    <ListWrapper>
      <SearchItem content="복숭아" />
      <SearchItem content="복숭아" />
      <SearchItem content="복숭아" />
      <SearchItem content="복숭아" />
    </ListWrapper>
  );
}

function SearchItem({ content }: { content: string }) {
  return (
    <ItemWrapper>
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
