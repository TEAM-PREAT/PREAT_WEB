import { RestaurantType } from '@/api/wishs';
import MyList from '@/components/home/open-box/my-list';
import PenIcon from '@/components/home/pen-icon';
import { CurrentStep } from '@/components/home/types';
import CircleXIcon from '@/components/icons/circle-x-icon';
import styled from 'styled-components';

interface ListWrapperProps {
  current: CurrentStep;
  searchModeOn: () => void;
  list: RestaurantType[];
}

export default function ListWrapper({
  current,
  searchModeOn,
  list,
}: ListWrapperProps) {
  return (
    <Wrapper>
      <ListEditButton>
        맛집 리스트 수정하기
        <PenIcon />
      </ListEditButton>
      <ListAddWrapper onClick={searchModeOn}>
        <CircleXIcon />
        맛집 리스트 추가하기
      </ListAddWrapper>
      <ItemListWrapper>
        {current === CurrentStep.My && <MyList list={list} />}
      </ItemListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 325px;
  margin: 0 auto;
`;

const ListAddWrapper = styled.div`
  font-size: 15px;
  line-height: 34px;

  color: #8e8d8d;

  display: flex;
  gap: 10px;
  align-items: center;
`;

const ItemListWrapper = styled.div`
  overflow-y: auto;
  height: calc(100vh - 400px);
  border-top: 0.8px solid #cccccc;
`;

const ListEditButton = styled.div`
  font-weight: 500;
  font-size: 10px;
  margin: auto;
  width: fit-content;
  padding-bottom: 1px;
  border-bottom: 1px solid #ff6c3e;
  color: #8e8d8d;
  position: relative;
  svg {
    position: absolute;
    right: -12px;
    bottom: -1px;
  }
`;
