import Input from '@/components/input';
import { ButtonStyled } from '@/styles/core';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface NickNameInputPageProps {
  onNextStep: () => void;
}
function NickNameInputPage({ onNextStep }: NickNameInputPageProps) {
  const [inputs, setInputs] = useState({
    nickname: '',
  });

  const { nickname } = inputs;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const [isError, setIsError] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const handleError = () => {
    setIsError(!isError);
  };

  const onAction = () => {
    onNextStep();
  };

  return (
    <Wrapper>
      <Title>닉네임을</Title>
      <Title>입력해보세요</Title>
      <InputWrapper>
        <Input
          name="nickname"
          value={nickname}
          onChange={handleInputChange}
          onErrorHandler={handleError}
          isError={isError}
          isCorrect={isCorrect}
        />
      </InputWrapper>
      <Button disabled={!isCorrect} onClick={onAction}>
        확인
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 100px 60px;
`;

const Button = styled(ButtonStyled)``;
const Title = styled.p`
  font-size: 25px;
  font-weight: 900;
  line-height: normal;
`;

const InputWrapper = styled.div`
  margin-top: 70px;
  margin-bottom: 20px;
`;

export default NickNameInputPage;
