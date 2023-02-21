import RestaurantItem from '@/components/common/restaurant-item';
import CircleXIcon from '@/components/icons/circle-x-icon';
import { RestaurantScoreItemType } from '@/components/join/types';
import styled from 'styled-components';

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

function ListEdit() {
  return (
    <>
      <ListAddWrapper>
        <CircleXIcon />
        맛집 리스트 추가하기
      </ListAddWrapper>
      <ListWrapper>
        {DUMMY.map((item) => (
          <RestaurantItem key={item.id} {...item} />
        ))}
      </ListWrapper>
    </>
  );
}

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

export default ListEdit;
