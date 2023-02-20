import SmallSearchIcon from '@/components/icons/small-search-icon';
import { RestaurantItemType } from '@/components/join/types';
import styled from 'styled-components';

interface SearchItemProps extends RestaurantItemType {
  onClick: () => void;
}
export default function SearchItem({ name, onClick }: SearchItemProps) {
  return (
    <ItemWrapper onClick={onClick}>
      <SmallSearchIcon />
      <span>{name}</span>
    </ItemWrapper>
  );
}

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
