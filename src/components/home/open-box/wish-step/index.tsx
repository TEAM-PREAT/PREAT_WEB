import { RestaurantType } from '@/api/wishs';
import SearchBar from '@/components/home/open-box/search-bar';
import {
  ListAddWrapper,
  EditButton,
  NavTitle,
  StepWrapper,
} from '@/components/home/open-box/step-styled';
import WishListEdit from '@/components/home/open-box/wish-step/edit-list';
import WishList from '@/components/home/open-box/wish-step/wish-list';
import CircleXIcon from '@/components/icons/circle-x-icon';
import useToggle from '@/hooks/useToggle';
import { FlexAlignCenter } from '@/styles/core';

interface WishStepProps {
  list: RestaurantType[];
  isFullPage?: boolean;
  reload: () => void;
}

export default function WishStep({ list, isFullPage, reload }: WishStepProps) {
  const [
    isSearchMode,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _,
    { toggleOn: searchModeOn, toggleOff: searchModeOff },
  ] = useToggle();
  const [isEditMode, handleToggleEditMode] = useToggle();

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
          reload={reload}
          searchModeOff={searchModeOff}
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
              <WishListEdit isFullPage={isFullPage} list={list} />
            ) : (
              <WishList isFullPage={isFullPage} list={list} />
            )}
          </>
        </StepWrapper>
      )}
    </div>
  );
}
