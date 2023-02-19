import BackIcon from '@/components/icons/back-icon';
import {
  ContainerWithHeader,
  ContainerWithHeaderStyled,
} from '@/components/join/layout';
import { ChildrenProps } from '@/types';
import styled from 'styled-components';

interface ContainerWithHeadingProps extends ChildrenProps {
  title: string;
  step: number;
}

export function ContainerWithHeading({
  title,
  step,
  children,
}: ContainerWithHeadingProps) {
  return (
    <ContainerWithHeader>
      <Heading>{title}</Heading>
      {children}
    </ContainerWithHeader>
  );
}

const Heading = styled.h1`
  font-weight: 900;
  font-size: 20px;
  line-height: 34px;
  color: #000000;
`;
