import styled from 'styled-components';
import Image from 'next/image';
import CheckIcon from '@/components/icons/chcek-icon';

interface FoodItemProps {
  label: string;
  src?: string;
  isSelected: boolean;
  onSelect: () => void;
}

export default function FoodItem({
  label,
  src,
  isSelected,
  onSelect,
}: FoodItemProps) {
  return (
    <FoodItemWrapper onClick={onSelect}>
      <FoodImageWrapper>
        {src && <Image src={src} alt={label} width={96} height={94} />}
        {isSelected && (
          <SelectedOverlay>
            <CheckIcon />
          </SelectedOverlay>
        )}
      </FoodImageWrapper>
      <Label>{label}</Label>
    </FoodItemWrapper>
  );
}

const FoodItemWrapper = styled.div`
  text-align: center;
  width: 96px;
`;

const FoodImageWrapper = styled.div`
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #d9d9d9;
  position: relative;
`;

const SelectedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 108, 62, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`;

const Label = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 34px;
  color: #424242;
`;
