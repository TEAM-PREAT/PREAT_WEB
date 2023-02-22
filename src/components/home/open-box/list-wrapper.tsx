import { RestaurantType } from '@/api/wishs';
import MyList from '@/components/home/open-box/my-step/my-list';
import MyListEdit from '@/components/home/open-box/my-step/my-list/edit-mode';
import { CurrentStep } from '@/components/home/types';
import CircleXIcon from '@/components/icons/circle-x-icon';
import { FlexAlignCenter, MaxItemContainer } from '@/styles/core';
import styled from 'styled-components';

interface ListWrapperProps {
  current: CurrentStep;
  searchModeOn: () => void;
  list: RestaurantType[];
  isEditMode: boolean;
  handleToggleEditMode: () => void;
}

// TODO: 삭제
export default function ListWrapper({
  current,
  searchModeOn,
  list,
  handleToggleEditMode,
  isEditMode,
}: ListWrapperProps) {
  return (
    <MaxItemContainer>
      <ListAddWrapper>
        <FlexAlignCenter onClick={searchModeOn}>
          <CircleXIcon />
          <span>맛집 리스트 추가하기</span>
        </FlexAlignCenter>
        <EditButton onClick={handleToggleEditMode}>편집</EditButton>
      </ListAddWrapper>
      <>
        {current === CurrentStep.My &&
          (isEditMode ? <MyListEdit list={list} /> : <MyList list={list} />)}
      </>
    </MaxItemContainer>
  );
}

// const Wrapper = styled.div`
//   max-width: 325px;
//   margin: 0 auto;
// `;

const ListAddWrapper = styled.div`
  font-size: 15px;
  line-height: 34px;

  color: #8e8d8d;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
`;

const EditButton = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 20px;

  color: #8e8d8d;
  width: 38px;
  height: 21px;

  border: 1px solid #d9d9d9;
  border-radius: 8px;
  text-align: center;

  cursor: pointer;
`;

export const ItemListWrapper = styled.div`
  overflow-y: auto;
  height: calc(100vh - 400px);
  border-top: 0.8px solid #cccccc;
  position: relative;
`;

export const ItemListWrapperWithButton = styled.div`
  overflow-y: auto;
  height: calc(100vh - 500px);
  border-top: 0.8px solid #cccccc;
  position: relative;
`;
