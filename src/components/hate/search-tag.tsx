import styled from 'styled-components';

interface SearchTagProps {
  content: string;
}

export default function SearchTag({ content }: SearchTagProps) {
  return <Wrapper>{content}</Wrapper>;
}

const Wrapper = styled.div`
  width: fit-content;
  height: 24px;
  min-width: fit-content;

  background: #ffffff;
  border: 1px solid #ff6c3e;
  border-radius: 19px;

  font-weight: 600;
  font-size: 11px;
  line-height: 22px;
  padding: 0 10px;
`;
