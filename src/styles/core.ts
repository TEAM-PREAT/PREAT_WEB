import styled from 'styled-components';

export const AbsoluteCenterStyled = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
`;

export const ButtonStyled = styled.button<{}>`
  width: 100%;
  height: 53px;
  background-color: #ff6c3e;
  border-radius: 18px;
  color: #fff;

  font-size: 20px;
  font-weight: 700;

  &:disabled {
    background-color: #c7c4c4;
  }
`;
