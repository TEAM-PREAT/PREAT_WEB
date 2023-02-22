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

export const ButtonStyled = styled.button`
  cursor: pointer;
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

export const Flex = styled.div`
  display: flex;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexAlignCenter = styled.div<{ gap?: number }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props?.gap ?? 10}px;
`;

// NOTE: max-with 논의가 필요함
export const MaxItemContainer = styled.div`
  max-width: 325px;
  margin: 0 auto;
`;
