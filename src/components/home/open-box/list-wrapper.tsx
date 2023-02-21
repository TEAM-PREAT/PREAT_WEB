import MyList from '@/components/home/open-box/my-list';
import { CurrentStep } from '@/components/home/types';
import CircleXIcon from '@/components/icons/circle-x-icon';
import styled from 'styled-components';

interface ListWrapperProps {
  current: CurrentStep;
}

export default function ListWrapper({ current }: ListWrapperProps) {
  return (
    <>
      <ListAddWrapper>
        <CircleXIcon />
        맛집 리스트 추가하기
      </ListAddWrapper>
      <Wrapper>{current === CurrentStep.My && <MyList />}</Wrapper>
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

const Wrapper = styled.div`
  overflow-y: auto;
  height: calc(100vh - 400px);
  border-top: 0.8px solid #cccccc;
`;
