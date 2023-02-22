import { RestaurantType } from '@/api/wishs';
import MyList from '@/components/home/open-box/my-step/my-list';
import MyListEdit from '@/components/home/open-box/my-step/my-list/edit-mode';
import {
  ListAddWrapper,
  EditButton,
  NavTitle,
  StepWrapper,
} from '@/components/home/open-box/step-styled';
import CircleXIcon from '@/components/icons/circle-x-icon';
import SearchBar from '@/components/join/restaurant/search-bar';
import { RestaurantItemType } from '@/components/join/types';
import useToggle from '@/hooks/useToggle';
import { FlexAlignCenter } from '@/styles/core';

interface MyStepProps {
  list: RestaurantType[];
  isFullPage?: boolean;
}
export default function MyStep({ list, isFullPage }: MyStepProps) {
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
        <NavTitle>리스트 수정하기</NavTitle>
      ) : (
        <NavTitle>내 맛집 리스트</NavTitle>
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
        <StepWrapper>
          <ListAddWrapper>
            <FlexAlignCenter onClick={searchModeOn}>
              <CircleXIcon />
              <span>맛집 리스트 추가하기</span>
            </FlexAlignCenter>
            <EditButton onClick={handleToggleEditMode}>편집</EditButton>
          </ListAddWrapper>
          <>
            {isEditMode ? (
              <MyListEdit list={list} />
            ) : (
              <MyList isFullPage={isFullPage} list={list} />
            )}
          </>
        </StepWrapper>
      )}
    </div>
  );
}
