import { FontSize8 } from '@/styles/font';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

export default function SugarSlider() {
  const [step, setStep] = useState(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log('value: ', value);

    setStep(parseInt(value) - 1);
  };
  return (
    <Wrapper>
      <LabelWrapper>
        <FontSize8>0</FontSize8>
        <FontSize8>30</FontSize8>
        <FontSize8>50</FontSize8>
        <FontSize8>70</FontSize8>
        <FontSize8>100</FontSize8>
      </LabelWrapper>
      <SliderWrapper>
        <RadioInputWrapper>
          <RadioInput
            type="radio"
            name="debt-amount"
            id="1"
            value="1"
            required
            onChange={handleInputChange}
            defaultChecked
          />
          <RadioInput
            type="radio"
            name="debt-amount"
            id="2"
            value="2"
            required
            onChange={handleInputChange}
          />

          <RadioInput
            type="radio"
            name="debt-amount"
            id="3"
            value="3"
            onChange={handleInputChange}
            required
          />

          <RadioInput
            type="radio"
            name="debt-amount"
            id="4"
            onChange={handleInputChange}
            value="4"
            required
          />
          <RadioInput
            type="radio"
            name="debt-amount"
            id="5"
            value="5"
            required
            onChange={handleInputChange}
          />
        </RadioInputWrapper>
        <SlideBar />
        <SlideBarColor step={step} />
      </SliderWrapper>

      <TextLabelWrapper>
        <span>거의 달지 않은 맛</span>
        <span>가장 단 맛</span>
      </TextLabelWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 30px;
`;
const TextLabelWrapper = styled.div`
  width: 200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  margin-top: 8px;
  font-weight: 600;
  span:nth-child(1) {
    color: #ababab;
  }
  span:nth-child(2) {
    color: #ff6c3e;
  }
`;
const LabelWrapper = styled.div`
  color: #848484;
  display: flex;
  justify-content: space-between;
  width: 196px;
  position: relative;
  left: 2px;
  margin: auto;

  span:nth-child(2),
  span:nth-child(3),
  span:nth-child(4) {
    position: relative;
    left: 3px;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 250px;
  left: -6px;
`;

const SlideBar = styled.div`
  position: absolute;
  top: 8px;
  left: 16px;
  z-index: 1;
  width: 190px;
  height: 6px;
  background: #d9d9d9;
`;

const SlideBarColor = styled(SlideBar)<{ step: number }>`
  width: ${(props) => `${props.step * 48}px`};
  background-color: #ff6c3e;
`;

const RadioInputWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

const RadioInput = styled.input`
  background-color: #ffff;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 1px solid #ff6c3e;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  margin-right: 25px;

  &:checked {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    position: relative;
    &::before {
      content: '';
      display: block;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      left: 2px;
      width: 10px;
      height: 10px;
      background-color: #ff6c3e;
    }
  }
`;
