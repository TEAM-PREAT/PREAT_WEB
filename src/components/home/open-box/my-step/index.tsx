import { RestaurantType } from '@/api/wishs';
import MyList from '@/components/home/open-box/my-step/my-list';
import MyListEdit from '@/components/home/open-box/my-step/my-list/edit-mode';
import CircleXIcon from '@/components/icons/circle-x-icon';
import SearchBar from '@/components/join/restaurant/search-bar';
import { RestaurantItemType } from '@/components/join/types';
import useToggle from '@/hooks/useToggle';
import { FlexAlignCenter } from '@/styles/core';
import styled from 'styled-components';

interface MyStepProps {
  list: RestaurantType[];
}
export default function MyStep({ list }: MyStepProps) {
  const [
    isSearchMode,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _,
    { toggleOn: searchModeOn, toggleOff: searchModeOff },
  ] = useToggle();
  const [isEditMode, handleToggleEditMode] = useToggle();

  const newRestaurantAdd = (obj: RestaurantItemType) => {
    console.log('obj: ', obj);
  };

  return (
    <div>
      {isEditMode ? (
        <Title>리스트 수정하기</Title>
      ) : (
        <Title>내 맛집 리스트</Title>
      )}
      {isSearchMode && (
        <SearchBar
          isSearchMode={isSearchMode}
          searchModeOn={searchModeOn}
          searchModeOff={searchModeOff}
          onAction={newRestaurantAdd}
        />
      )}
      {!isSearchMode && (
        <Wrapper>
          <ListAddWrapper>
            <FlexAlignCenter onClick={searchModeOn}>
              <CircleXIcon />
              <span>맛집 리스트 추가하기</span>
            </FlexAlignCenter>
            <EditButton onClick={handleToggleEditMode}>편집</EditButton>
          </ListAddWrapper>
          <>
            {isEditMode ? <MyListEdit list={list} /> : <MyList list={list} />}
          </>
        </Wrapper>
      )}
    </div>
  );
}

const Title = styled.h2`
  font-weight: 900;
  font-size: 20px;
  line-height: 34px;

  color: #000000;
  text-align: center;
  margin-top: 25px;
`;

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
