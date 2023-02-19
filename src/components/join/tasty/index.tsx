import Box from '@/components/join/tasty/box';
import SpicySlider from '@/components/join/tasty/spicy-slider';
import SugarSlider from '@/components/join/tasty/sugar-slider';
import Image from 'next/image';
import styled from 'styled-components';

interface TasteSettingProps {
  onNextStep: () => void;
}

export default function TasteSetting({ onNextStep }: TasteSettingProps) {
  return (
    <Wrapper>
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
        <SpicySlider />
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
        <SugarSlider />
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  width: 100%;
  max-width: 320px;
`;

const Title = styled.h2`
  font-weight: 900;
  font-size: 20px;
  line-height: 34px;

  color: #000000;

  margin-bottom: 28px;
  margin-top: 51px;
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
