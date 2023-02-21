import ToggleNav from '@/components/home/open-box/togggle-nav';
import PenIcon from '@/components/home/pen-icon';
import { CurrentStep } from '@/components/home/types';
import { useState } from 'react';
import styled from 'styled-components';

const NAV_TITLE_LIST = ['내 맛집 리스트', '내 맛집 리스트', '내 맛집 리스트'];
export default function OpenStatus() {
  const [current, setCurrent] = useState<CurrentStep>(0);

  const handleCurrent = (next: CurrentStep) => {
    setCurrent(next);
  };
  return (
    <div>
      <ToggleNav current={current} handleCurrent={handleCurrent} />

      <Title>{NAV_TITLE_LIST[current]}</Title>
      <ListEdit>
        맛집 리스트 수정하기
        <PenIcon />
      </ListEdit>
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
