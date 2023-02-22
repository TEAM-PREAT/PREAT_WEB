import { FixedContainerStyled } from '@/styles/core';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface ConfirmModalProps {
  children: ReactNode;
  label: string;
}

function ConfirmModal({ children, label }: ConfirmModalProps) {
  return (
    <OuterOverlay>
      <Wrapper>
        <div>{children}</div>
        <ButtonWrapper>
          <button>취소</button>
          <button>{label}</button>
        </ButtonWrapper>
      </Wrapper>
    </OuterOverlay>
  );
}

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;

  width: 324px;
  height: 144px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 36px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;

  font-weight: 500;
  font-size: 15px;
  line-height: 10px;

  button {
    color: rgba(0, 0, 0, 0.5);

    &:last-child {
      color: #ff6c3e;
    }
  }
`;
const OuterOverlay = styled(FixedContainerStyled)`
  height: 100vh;
  top: 0;
  bottom: 0;
  background: #5c5c5c;
  mix-blend-mode: multiply;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ConfirmModal;
