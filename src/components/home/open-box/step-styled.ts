import styled, { css } from 'styled-components';

export const NavTitle = styled.h2`
  font-weight: 900;
  font-size: 20px;
  line-height: 34px;

  color: #000000;
  text-align: center;
  margin-top: 25px;
`;

export const StepWrapper = styled.div`
  max-width: 325px;
  margin: 0 auto;
`;

export const ListAddWrapper = styled.div`
  font-size: 15px;
  line-height: 34px;

  color: #8e8d8d;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
`;

export const EditButton = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 20px;

  color: #8e8d8d;
  width: 38px;
  height: 21px;

  border: 1px solid #d9d9d9;
  border-radius: 8px;
  text-align: center;

  cursor: pointer;
`;

export const ItemListWrapper = styled.div<{ isFullPage?: boolean }>`
  overflow-y: auto;

  border-top: 0.8px solid #cccccc;
  position: relative;

  ${(props) =>
    props.isFullPage
      ? css``
      : css`
          height: calc(100vh - 400px);
        `}
`;

export const ItemListWrapperWithButton = styled.div`
  overflow-y: auto;
  height: calc(100vh - 500px);
  border-top: 0.8px solid #cccccc;
  position: relative;
`;
