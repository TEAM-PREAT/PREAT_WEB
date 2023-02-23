import { RestaurantType } from '@/api/wishs';
import MyList from '@/components/home/open-box/my-step/my-list';
import MyListEdit from '@/components/home/open-box/my-step/my-list/edit-mode';
import SearchBar from '@/components/home/open-box/search-bar';
import {
  ListAddWrapper,
  EditButton,
  NavTitle,
  StepWrapper,
} from '@/components/home/open-box/step-styled';
import CircleXIcon from '@/components/icons/circle-x-icon';
import useToggle from '@/hooks/useToggle';
import { FlexAlignCenter } from '@/styles/core';

interface MyStepProps {
  list: RestaurantType[];
  reload: () => void;
  isFullPage?: boolean;
}
export default function MyStep({ list, isFullPage, reload }: MyStepProps) {
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
        <NavTitle>내 맛집 리스트</NavTitle>
      )}
      {isSearchMode && (
        <SearchBar
          isSearchMode={isSearchMode}
          searchModeOn={searchModeOn}
          searchModeOff={searchModeOff}
          reload={reload}
        />
      )}
      {!isSearchMode && (
        <StepWrapper>
          <>
            {isEditMode ? (
              <MyListEdit
                isFullPage={isFullPage}
                list={list}
                reload={reload}
                onClose={handleToggleEditMode}
              />
            ) : (
              <>
                <ListAddWrapper>
                  <FlexAlignCenter onClick={searchModeOn}>
                    <CircleXIcon />
                    <span>맛집 리스트 추가하기</span>
                  </FlexAlignCenter>
                  <EditButton onClick={handleToggleEditMode}>편집</EditButton>
                </ListAddWrapper>
                <MyList isFullPage={isFullPage} list={list} reload={reload} />
              </>
            )}
          </>
        </StepWrapper>
      )}
    </div>
  );
}
