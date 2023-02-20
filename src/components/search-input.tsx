import SearchIcon from '@/components/icons/search-icon';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onFocus?: () => void;
}

export default function SearchInput({
  value,
  onFocus,
  onChange,
  placeholder,
}: SearchInputProps) {
  return (
    <InputWrapper>
      <Input
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
      />
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  width: 290px;
  height: 34px;
  margin: 5px auto;
  background: #f7f7f7;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
`;

const Input = styled.input`
  background: #f7f7f7;
  width: 100%;
  height: 100%;
  border-radius: 17px;
  padding: 0 20px 0 40px;
  font-weight: 600;
  font-size: 15px;
  line-height: 30px;
  color: #ff6c3e;

  font-weight: 500;
  font-size: 10px;

  &:focus {
    background: #ffffff;
  }
`;
