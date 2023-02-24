import styled from 'styled-components';
import Image from 'next/image';

export default function ItemList() {
  return (
    <>
      <SmallShadowBox>
        <span>1</span>
        <Image
          src="/assets/images/china-food.png"
          width={54}
          height={54}
          alt="yee"
        />

        <span>중식</span>
      </SmallShadowBox>
      <SmallShadowBox>
        <span>2</span>
        <Image
          src="/assets/images/korea-food.png"
          width={54}
          height={54}
          alt="yee"
        />

        <span>한식</span>
      </SmallShadowBox>
    </>
  );
}

const SmallShadowBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 19px;
  height: 56.26px;
  margin-top: 10px;

  font-weight: 900;
  font-size: 15px;
  line-height: 34px;

  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 20px;
  color: #000000;
  padding: 30px 20px;
  span {
    &:nth-child(1) {
      color: #ff6c3e;
    }
  }
`;
