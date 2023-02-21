import RestaurantItem from '@/components/common/restaurant-item';
import ToggleNav from '@/components/home/open-box/toggle-nav';
import PenIcon from '@/components/home/pen-icon';
import { CurrentStep } from '@/components/home/types';
import CircleXIcon from '@/components/icons/circle-x-icon';
import { RestaurantScoreItemType } from '@/components/join/types';
import styled from 'styled-components';

const NAV_TITLE_LIST = ['내 맛집 리스트', '내 맛집 리스트', '내 맛집 리스트'];

const DUMMY: RestaurantScoreItemType[] = [
  {
    id: 1,
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
    src: '/assets/images/bread.png',
    score: 1,
  },
  {
    id: 2,
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
    score: 5,
  },
  {
    id: 3,
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
    score: 0,
  },
  {
    id: 4,
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
    src: '/assets/images/bread.png',
    score: 1,
  },
  {
    id: 22,
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
    score: 5,
  },
  {
    id: 13,
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
    score: 0,
  },
  {
    id: 31,
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
    src: '/assets/images/bread.png',
    score: 1,
  },
  {
    id: 26,
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
    score: 5,
  },
  {
    id: 31,
    name: '성심당 본점',
    type: '베이커리',
    location: '대전광역시 ㅇㅇㅇㅇㅇㅇㅇ',
    score: 0,
  },
];

interface OpenStatusProps {
  current: CurrentStep;
  handleCurrent: (next: CurrentStep) => void;
}

export default function OpenStatus({
  current,
  handleCurrent,
}: OpenStatusProps) {
  return (
    <div>
      <ToggleNav current={current} handleCurrent={handleCurrent} />

      <Title>{NAV_TITLE_LIST[current]}</Title>
      <ListEdit>
        맛집 리스트 수정하기
        <PenIcon />
      </ListEdit>
      <ListAddWrapper>
        <CircleXIcon />
        맛집 리스트 추가하기
      </ListAddWrapper>
      <ListWrapper>
        {DUMMY.map((item) => (
          <RestaurantItem key={item.id} {...item} />
        ))}
      </ListWrapper>
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

const ListEdit = styled.div`
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

const ListAddWrapper = styled.div`
  font-size: 15px;
  line-height: 34px;

  color: #8e8d8d;

  display: flex;
  gap: 10px;
  align-items: center;
`;

const ListWrapper = styled.div`
  overflow-y: auto;
  height: calc(100vh - 400px);
  border-top: 0.8px solid #cccccc;
`;
