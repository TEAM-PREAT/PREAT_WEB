import SettingContainer from '@/components/join/layout/ContainerWithHeading';
import Box from '@/components/join/tasty/box';
import SpicySlider from '@/components/join/tasty/spicy-slider';
import SugarSlider from '@/components/join/tasty/sugar-slider';
import { ButtonStyled } from '@/styles/core';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

interface TasteSettingProps {
  onNextStep: (spicyStep: number, sugarStep: number) => void;
}

export default function TasteSetting({ onNextStep }: TasteSettingProps) {
  const [spicyStep, setSpicyStep] = useState<number | null>(null);
  const [sugarStep, setSugarStep] = useState<number | null>(null);

  const isSubmitDisabled = sugarStep === null || spicyStep === null;

  const onButtonClick = () => {
    if (!isSubmitDisabled) {
      onNextStep(spicyStep, sugarStep);
    }
  };

  return (
    <SettingContainer title="입맛을 설정해주세요." step={2}>
      <div>
        <Title>
          맵기
          <ImageWrapper1
            src="/assets/images/fire.png"
            alt="fire"
            width={43}
            height={43}
          />
        </Title>
        <Box>
          <SpicySlider
            value={spicyStep ?? 0}
            handleValue={(value) => setSpicyStep(value)}
          />
        </Box>
        <Title>
          당도
          <ImageWrapper2
            src="/assets/images/donat.png"
            alt="donat"
            width={40}
            height={33}
          />
        </Title>
        <Box>
          <SugarSlider
            step={sugarStep}
            handleStep={(step) => setSugarStep(step)}
          />
        </Box>
      </div>

      <Button disabled={isSubmitDisabled} onClick={onButtonClick}>
        확인
      </Button>
    </SettingContainer>
  );
}

const Button = styled(ButtonStyled)``;

const Title = styled.h2`
  font-weight: 900;
  font-size: 20px;
  line-height: 34px;

  color: #000000;

  margin-bottom: 28px;
  margin-top: 51px;

  &:first-child {
    margin-top: 0;
  }
`;

const ImageWrapper1 = styled(Image)`
  position: relative;
  top: 10px;
  left: 5px;
`;

const ImageWrapper2 = styled(Image)`
  position: relative;
  top: 8px;
  left: 8px;
`;
