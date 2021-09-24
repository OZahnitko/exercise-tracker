import styled from "styled-components";

interface WrapperProps {
  isActive?: boolean;
  large?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  background-color: #f1f3fa;
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.isActive && "0px 1px 50px 1px rgba(0, 0, 0, 0.15)"};

  ${(props) => props.large && `height: 400px; overflow: hidden auto;`}

  margin-bottom: 25px;

  padding: 25px;

  transition: all 0.25s linear;
`;
