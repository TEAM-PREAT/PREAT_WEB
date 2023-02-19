import styled from 'styled-components';

export default function SpicySlider() {
  return (
    <>
      <SliderInputWrapper>
        <SliderInput name="range" type="range" min="0" max="100" step="25" />
      </SliderInputWrapper>

      <StepWrapper>
        <span>0</span>
        <span>30</span>
        <span>50</span>
        <span>70</span>
        <span>100</span>
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
  accent-color: #ef511e;
  outline: none;
  width: 215px;
  margin: auto;
`;

const StepWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  color: #ababab;
  font-weight: 600;
  font-size: 8px;
  margin: 5px;

  span:nth-child(n + 2) {
    position: relative;
    left: 5px;
  }
`;

const StepTextWrapper = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 8px;
  justify-content: space-between;
  margin: 10px 0;

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
