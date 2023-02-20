import FoodItem from '@/components/join/hate/food-item';
import Image from 'next/image';
import styled from 'styled-components';
import { HateFoodType } from '@/api/join-setting';

interface FoodListProps {
  list: HateFoodType[];
  selectList: number[];
  handleSelectList: (newSelectList: number[]) => void;
}

export default function FoodList({
  selectList,
  handleSelectList,
  list,
}: FoodListProps) {
  const handleSelectItem = (id: number) => {
    if (selectList.includes(id)) {
      const newSelectList = selectList.filter((element) => element !== id);
      handleSelectList(newSelectList);
    } else {
      handleSelectList([...selectList, id]);
    }
  };

  return (
    <Wrapper>
      <Title>
        호불호 음식
        <Image src="/assets/images/jwt.png" alt="jwt" width={71} height={40} />
      </Title>
      <FoodListWrapper>
        {list.map(({ id, food, imgUrl }) => {
          const isSelected = selectList.includes(id);
          const onSelect = () => handleSelectItem(id);

          return (
            <FoodItem
              key={id}
              id={id}
              label={food}
              src={imgUrl}
              isSelected={isSelected}
              onSelect={onSelect}
            />
          );
        })}
      </FoodListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Title = styled.h2`
  font-weight: 900;
  font-size: 20px;
  line-height: 34px;
  margin-top: 10px;

  img {
    position: relative;
    top: 10px;
  }
`;

const FoodListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin: 25px 0;
`;
