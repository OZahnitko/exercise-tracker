import styled from "styled-components";

interface WrapperProps {
  elementHeight: number | undefined;
}

export const Wrapper = styled.div<WrapperProps>`
  bottom: -${(props) => props.elementHeight}px;

  left: 0;

  opacity: 0;

  position: absolute;

  transition: opacity ${({ theme }) => theme.times.drawerTransitionDuration}ms
      ease-in-out,
    bottom ${({ theme }) => theme.times.drawerTransitionDuration}ms ease-in-out;

  width: 100%;
`;
