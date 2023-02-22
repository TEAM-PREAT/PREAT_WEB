import { RestaurantType } from '@/api/wishs';
import {
  ListAddWrapper,
  EditButton,
  NavTitle,
  StepWrapper,
} from '@/components/home/open-box/step-styled';
import WishListEdit from '@/components/home/open-box/wish-step/edit-list';
import WishList from '@/components/home/open-box/wish-step/wish-list';
import CircleXIcon from '@/components/icons/circle-x-icon';
import SearchBar from '@/components/join/restaurant/search-bar';
import { RestaurantItemType } from '@/components/join/types';
import useToggle from '@/hooks/useToggle';
import { FlexAlignCenter } from '@/styles/core';

interface WishStepProps {
  list: RestaurantType[];
}

export default function WishStep({ list }: WishStepProps) {
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
        <NavTitle>가봐야 할 맛집 리스트</NavTitle>
      )}
      {/* NOTE: 중복해서 쓰면 안되나? */}
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
              <CircleXIcon color="#FF60AC" />
              <span>가봐야 할 맛집 리스트 추가하기</span>
            </FlexAlignCenter>
            <EditButton onClick={handleToggleEditMode}>편집</EditButton>
          </ListAddWrapper>
          <>
            {isEditMode ? (
              <WishListEdit list={list} />
            ) : (
              <WishList list={list} />
            )}
          </>
        </StepWrapper>
      )}
    </div>
  );
}
