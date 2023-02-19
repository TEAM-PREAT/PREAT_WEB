import { ChildrenProps } from '@/types';
import styled from 'styled-components';

export default function Box({ children }: ChildrenProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 320px;
  height: 135px;

  background: #ffffff;
  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.15);
  border-radius: 27px;

  padding: 27px 51px 22px;
  text-align: center;
`;
