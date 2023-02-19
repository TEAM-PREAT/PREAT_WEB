import FoodItem from '@/components/hate/food-item';
import styled from 'styled-components';

export default function FoodList() {
  return (
    <Wrapper>
      <FoodItem
        label={'food item'}
        isSelected={false}
        src="/assets/images/pine.png"
      />
      <FoodItem
        label={'food item'}
        isSelected={false}
        src="/assets/images/pine.png"
      />
      <FoodItem
        label={'food item'}
        isSelected={true}
        src="/assets/images/pine.png"
      />
      <FoodItem label={'food item'} isSelected={false} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin: 25px 0;
`;
