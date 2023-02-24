import { restaurantReviewDelete } from '@/api/reviews';
import { RestaurantType } from '@/api/wishs';
import ConfirmModal from '@/components/common/confirm-modal';
import SelectRestaurantItem from '@/components/common/restaurant-item/select-restaurant-item';
import {
  ItemListWrapperWithButton,
  ListAddWrapper,
} from '@/components/home/open-box/step-styled';
import CircleCheckIcon from '@/components/icons/circle-check-icon';
import useToggle from '@/hooks/useToggle';
import { ButtonStyled, FlexAlignCenter } from '@/styles/core';
import { useState } from 'react';
import styled from 'styled-components';

interface MyListProps {
  list: RestaurantType[];
  isFullPage?: boolean;
  reload: () => void;
  onClose: () => void;
}

export default function MyListEdit({
  list,
  isFullPage,
  reload,
  onClose,
}: MyListProps) {
  const [checkList, setCheckList] = useState<number[]>([]);
  const [isAllCheck, setIsAllCheck] = useState(false);
  const [isModalVisible, toggleModalVisible] = useToggle();

  const handleCheck = (id: number) => {
    if (checkList.includes(id)) {
      //  체크 풀기
      if (isAllCheck) {
        setIsAllCheck(false);
      }
      const newCheckList = checkList.filter((data) => data !== id);
      setCheckList(newCheckList);
    } else {
      // 체크 하기
      setCheckList([...checkList, id]);
    }
  };

  const handleAllCheckClick = () => {
    if (!isAllCheck) {
      const allCheckList = list.map(({ id }) => id);
      setCheckList(allCheckList);
    } else {
      setCheckList([]);
    }
    setIsAllCheck(!isAllCheck);
  };

  const openConfirmModal = () => {
    toggleModalVisible();
  };
  const onAction = async () => {
    for await (const checkId of checkList) {
      await restaurantReviewDelete(checkId);
    }

    reload();
    onClose();
  };

  return (
    <Wrapper>
      <ListAddWrapper>
        <FlexAlignCenter onClick={handleAllCheckClick}>
          <CircleCheckIcon color={isAllCheck ? '#FF6C3E' : '#D9D9D9'} />
          <span>전체 선택하기</span>
        </FlexAlignCenter>
      </ListAddWrapper>

      <ItemListWrapperWithButton isFullPage={isFullPage}>
        {list.map((item) => (
          <SelectRestaurantItem
            key={item.id}
            {...item}
            checked={checkList.includes(item.id)}
            toggleCheck={() => handleCheck(item.id)}
          />
        ))}
      </ItemListWrapperWithButton>
      <BottomBox isFullPage={isFullPage}>
        <ButtonStyled onClick={openConfirmModal}>확인</ButtonStyled>
      </BottomBox>
      {isModalVisible && (
        <ConfirmModal
          label="삭제"
          onClose={toggleModalVisible}
          onAction={onAction}
        >
          <span>{checkList.length}개의 장소를 리스트에서 삭제합니다.</span>
        </ConfirmModal>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div``;

const BottomBox = styled.div<{ isFullPage?: boolean }>`
  position: ${(props) => (props.isFullPage ? 'relative' : 'fixed')};
  right: 0;
  left: 0;
  width: 100%;
  max-width: 475px;
  height: 100px;
  padding-top: 18px;
  background-color: #fff;
  text-align: center;
  border-top: 0.3px solid #8b8b8b;

  margin: auto;

  button {
    width: 232px;
  }
`;
