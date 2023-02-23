import { RestaurantType } from '@/api/wishs';
import styled from 'styled-components';

interface SearchTagProps extends RestaurantType {
  onClick: () => void;
}

export default function SearchTag({ name, onClick }: SearchTagProps) {
  return <Wrapper onClick={onClick}>{name}</Wrapper>;
}

const Wrapper = styled.div`
  cursor: pointer;
  width: fit-content;
  height: 24px;
  min-width: fit-content;

  background: #ffffff;
  border: 1px solid #ff6c3e;
  border-radius: 19px;

  font-weight: 600;
  font-size: 11px;
  line-height: 22px;
  padding: 0 10px;
`;
