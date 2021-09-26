import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
`;

export const SearchInputIcon = styled.svg`
  position: absolute;

  top: 50%;
  left: 10px;

  transform: translateY(-50%);
`;

export const StyledInput = styled.input`
  background: #f5f5f5;
  border: 0px solid;
  border-radius: 15px;

  font-weight: 500;

  height: 50px;

  padding: 10px 10px 10px 35px;

  outline: 0px solid;

  width: 100%;
`;

export const Wrapper = styled.div`
  background: white;

  padding: ${(props) => props.theme.sizes.userPanelPadding}px;
  position: absolute;

  width: 100%;
`;
