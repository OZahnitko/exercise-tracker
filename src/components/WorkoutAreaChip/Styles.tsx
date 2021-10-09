import styled from "styled-components";

interface WrapperProps {
  selected: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  align-items: center;

  background-color: #f8e1d2;
  border: 2px solid #${(props) => (props.selected ? "fa7b34" : "f8e1d2")};
  border-radius: 5px;

  color: #fa7b34;

  display: flex;

  font-weight: bold;

  padding: 0 12px;

  white-space: nowrap;

  transition: border 0.25s ease-in-out;
`;
