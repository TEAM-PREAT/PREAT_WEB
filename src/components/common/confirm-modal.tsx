import { FixedContainerStyled } from '@/styles/core';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface ConfirmModalProps {
  children: ReactNode;
  label: string;

  onClose: () => void;
  onAction: () => void;
}

function ConfirmModal({
  children,
  label,
  onClose,
  onAction,
}: ConfirmModalProps) {
  return (
    <OuterWrapper>
      <OuterOverlay></OuterOverlay>
      <Wrapper>
        <div>{children}</div>
        <ButtonWrapper>
          <button onClick={onClose}>취소</button>
          <button onClick={onAction}>{label}</button>
        </ButtonWrapper>
      </Wrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled(FixedContainerStyled)`
  height: 110vh;
  bottom: 0;
  width: 110vw;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  top: -10vh;

  z-index: 100; //modal
`;
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
  z-index: 101;
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
const OuterOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 110vh;
  bottom: 0;
  background: #000000;
  opacity: 0.5;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  /* position: absolute;

  top: -100px;

  z-index: 100; //modal */
`;

export default ConfirmModal;
