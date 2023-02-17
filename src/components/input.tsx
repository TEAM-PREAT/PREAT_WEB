import Image from 'next/image';
import { type } from 'os';
import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface InputProps {
  name: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: 'text';

  isCorrect?: boolean;
  isError?: boolean;
  onErrorHandler?: () => void;
}

function Input({
  type = 'text',
  isError,
  onErrorHandler,
  ...props
}: InputProps) {
  return (
    <Wrapper>
      <CustomInput {...props} disabled={isError}></CustomInput>

      {isError && (
        <>
          <XMarker onClick={onErrorHandler}>
            <Image
              src="/assets/svgs/x-mark.svg"
              alt="x"
              width={24}
              height={24}
            />
          </XMarker>
          <ErrorMsg>error</ErrorMsg>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const InnerWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: fit-content;
  margin: auto;
`;

const ErrorMsg = styled(InnerWrapper)`
  left: 20px;
  color: #ff6c3e;
`;

const XMarker = styled(InnerWrapper)`
  right: 10px;
`;

const CustomInput = styled.input<{ isCorrect?: boolean; isError?: boolean }>`
  background-color: ${(props) => (props.isCorrect ? '#fff' : '#f9f9f9')};
  border: 1px solid ${(props) => (props.isCorrect ? '#FF6C3E' : '#acacac')};
  width: 100%;
  height: 53px;
  border-radius: 18px;
  padding: 10px 20px;
  font-size: 12px;
  color: #ff6c3e;

  &:focus {
    background-color: #fff;
  }
`;

export default Input;
