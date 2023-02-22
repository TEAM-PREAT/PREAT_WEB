import { checkNicknameAPI } from '@/api/join-setting';
import Input from '@/components/common/input';
import { ButtonStyled } from '@/styles/core';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface NickNameInputPageProps {
  onNextStep: (nickname: string) => void;
}

function NickNameInputPage({ onNextStep }: NickNameInputPageProps) {
  const [nickname, setNickname] = useState('');
  const [isError, setIsError] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkNicknameDuplicate = async (nickname: string) => {
    const { isAvailable } = await checkNicknameAPI(nickname);
    return !isAvailable;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setIsCorrect(value !== '');
    setNickname(value);
  };

  const handleError = () => {
    setIsError(!isError);
  };

  const onAction = async () => {
    const isAvailable = await checkNicknameDuplicate(nickname);
    // TODO: loading
    if (isAvailable) {
      setIsCorrect(false);
      setIsError(true);
      setNickname('');
      return;
    }

    onNextStep(nickname);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>닉네임을</Title>
        <Title>입력해주세요</Title>
        <Image
          src="/assets/images/smile.png"
          alt="smile"
          width={44}
          height={40}
        />
      </TitleWrapper>

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

const TitleWrapper = styled.div`
  position: relative;
  width: fit-content;

  img {
    position: absolute;
    bottom: 1px;
    right: -50px;
  }
`;

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
