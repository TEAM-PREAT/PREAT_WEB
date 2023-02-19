import { FontSize5, FontSize8 } from '@/styles/font';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

export default function SpicySlider() {
  const [value, setValue] = useState('0');

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { min, max, value } = e.target;
    setValue(value);
    e.target.style.backgroundSize =
      ((parseInt(value) - parseInt(min)) * 100) /
        (parseInt(max) - parseInt(min)) +
      '% 100%';
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
        <span>맵찔이</span>
        <span>신라면</span>
        <span>불닭볶음면</span>
        <span>맵고수</span>
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
  width: 193px;

  display: flex;
  justify-content: space-between;

  color: #ababab;
  font-weight: 600;
  margin: 5px 15px;
  span {
    position: relative;
  }
  span:nth-child(2),
  span:nth-child(3),
  span:nth-child(4) {
    left: 3px;
  }
`;

const StepTextWrapper = styled.div`
  display: flex;
  font-weight: 600;
  width: 200px;
  font-size: 10px;
  margin: auto;
  justify-content: space-between;

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
