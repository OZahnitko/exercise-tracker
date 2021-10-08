import styled from "styled-components";

export const IconContainer = styled.div`
  height: 18px;

  margin-right: 12px;

  width: 18px;
`;

interface SearchContainerProps {
  isFocused: boolean;
}

export const SearchContainer = styled.div<SearchContainerProps>`
  align-items: center;

  background: #f5f5f5;
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.isFocused && "0px 1px 15px 1px rgba(0, 0, 0, 0.2)"};

  display: flex;

  padding: 12px;

  transition: box-shadow 0.1s ease-in-out;
`;

export const StyledInput = styled.input`
  background: #f5f5f5;
  border: 0px solid;

  color: #c4c4c4;

  font-size: 16px;
  font-weight: 500;

  outline: 0px solid;

  padding: 0;

  width: 100%;

  ::placeholder {
    color: #c4c4c4;
  }
`;

export const Wrapper = styled.div`
  padding: 20px;
`;
