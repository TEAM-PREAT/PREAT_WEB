import styled from 'styled-components';

interface SearchTagProps {
  content: string;
  onAction: (key: string, content: string) => void;
}

export default function SearchTag({ content, onAction }: SearchTagProps) {
  const onClick = () => {
    //  TODO 수정
    onAction(content, content);
  };

  return <Wrapper onClick={onClick}>{content}</Wrapper>;
}

const Wrapper = styled.div`
  cursor: pointer;
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
