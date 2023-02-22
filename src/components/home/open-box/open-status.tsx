import { RestaurantType } from '@/api/wishs';
import ListWrapper from '@/components/home/open-box/list-wrapper';
import ToggleNav from '@/components/home/open-box/toggle-nav';
import { CurrentStep } from '@/components/home/types';
import SearchBar from '@/components/join/restaurant/search-bar';
import { RestaurantItemType } from '@/components/join/types';
import useToggle from '@/hooks/useToggle';
import styled from 'styled-components';

const NAV_TITLE_LIST = ['내 맛집 리스트', '내 맛집 리스트', '내 맛집 리스트'];

interface OpenStatusProps {
  current: CurrentStep;
  handleCurrent: (next: CurrentStep) => void;
  list: RestaurantType[];
}

export default function OpenStatus({
  current,
  handleCurrent,
  list,
}: OpenStatusProps) {
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
      <ToggleNav current={current} handleCurrent={handleCurrent} />

      {isEditMode ? (
        <Title>리스트 수정하기</Title>
      ) : (
        <Title>{NAV_TITLE_LIST[current]}</Title>
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
        <>
          <ListWrapper
            list={list}
            current={current}
            searchModeOn={searchModeOn}
            isEditMode={isEditMode}
            handleToggleEditMode={handleToggleEditMode}
          />
        </>
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
