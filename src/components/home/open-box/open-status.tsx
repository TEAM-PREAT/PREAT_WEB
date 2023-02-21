import ListEdit from '@/components/home/open-box/list-edit';
import ToggleNav from '@/components/home/open-box/toggle-nav';
import PenIcon from '@/components/home/pen-icon';
import { CurrentStep } from '@/components/home/types';
import SearchBar from '@/components/join/restaurant/search-bar';
import { RestaurantItemType } from '@/components/join/types';
import useToggle from '@/hooks/useToggle';
import styled from 'styled-components';

const NAV_TITLE_LIST = ['내 맛집 리스트', '내 맛집 리스트', '내 맛집 리스트'];

interface OpenStatusProps {
  current: CurrentStep;
  handleCurrent: (next: CurrentStep) => void;
}

export default function OpenStatus({
  current,
  handleCurrent,
}: OpenStatusProps) {
  // const [isSearchMode, setIsSearchMode] = useState(false);
  const [
    isSearchMode,
    _,
    { toggleOn: searchModeOn, toggleOff: searchModeOff },
  ] = useToggle();
  const newRestaurantAdd = (obj: RestaurantItemType) => {
    console.log('obj: ', obj);
  };

  return (
    <div>
      <ToggleNav current={current} handleCurrent={handleCurrent} />

      <Title>{NAV_TITLE_LIST[current]}</Title>
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
          <ListEditButton onClick={searchModeOn}>
            맛집 리스트 수정하기
            <PenIcon />
          </ListEditButton>
          <ListEdit />
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
