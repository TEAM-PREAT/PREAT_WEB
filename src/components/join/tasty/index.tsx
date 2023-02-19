import Box from '@/components/join/tasty/box';
import SpicySlider from '@/components/join/tasty/spicy-slider';
import styled from 'styled-components';

interface TasteSettingProps {
  onNextStep: () => void;
}

export default function TasteSetting({ onNextStep }: TasteSettingProps) {
  return (
    <Wrapper>
      <Box>
        <SpicySlider />
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px 36px;
`;
