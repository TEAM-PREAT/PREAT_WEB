import { FontSize5, FontSize8 } from '@/styles/font';
import { useState } from 'react';
import styled from 'styled-components';

export default function SpicySlider() {
  const [value, setValue] = useState(0);
  function handleInputChange(e) {
    let target = e.target;
    if (e.target.type !== 'range') {
      target = document.getElementById('range');
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;
    setValue(target.value);
    target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
  }

  return (
    <>
      <SliderInputWrapper>
        <SliderInput
          type="range"
          value={value}
          min="0"
          max="100"
          step={25}
          onChange={handleInputChange}
        />
      </SliderInputWrapper>

      <StepWrapper>
        <FontSize5>0</FontSize5>
        <FontSize5>30</FontSize5>
        <FontSize5>50</FontSize5>
        <FontSize5>70</FontSize5>
        <FontSize5>100</FontSize5>
      </StepWrapper>
      <StepTextWrapper>
        <FontSize8>맵찔이</FontSize8>
        <FontSize8>신라면</FontSize8>
        <FontSize8>불닭볶음면</FontSize8>
        <FontSize8>맵고수</FontSize8>
      </StepTextWrapper>
    </>
  );
}

const SliderInputWrapper = styled.div`
  margin-top: 30px;
`;

const SliderInput = styled.input`
  -webkit-appearance: none;
  width: 200px;
  height: 7px;
  background: #d9d9d9;
  border-radius: 5px;
  background-image: linear-gradient(#ff6c3e, #ff6c3e);
  background-size: 0% 100%;
  background-repeat: no-repeat;

  /* Input Thumb */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #ff6c3e;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #ff6c3e;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  &::-ms-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #ff4500;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  &::-webkit-slider-thumb:hover {
    background: #ff0200;
  }

  &::-moz-range-thumb:hover {
    background: #ff0200;
  }

  &::-ms-thumb:hover {
    background: #ff0200;
  }

  /* Input Track */
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-moz-range-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-ms-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;

const StepWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  color: #ababab;
  font-weight: 600;
  margin: 5px;

  span:nth-child(n + 2) {
    position: relative;
    left: 5px;
  }
`;

const StepTextWrapper = styled(FontSize8)`
  display: flex;
  font-weight: 600;
  font-size: 8px;
  justify-content: space-between;

  font-size: 10px;
  transform: scale(0.8); //0.

  span:nth-child(1) {
    color: #ababab;
  }
  span:nth-child(2) {
    color: #ffb800;
  }
  span:nth-child(3) {
    color: #ff7020;
  }
  span:nth-child(4) {
    color: #ff3d00;
    position: relative;
  }
`;
