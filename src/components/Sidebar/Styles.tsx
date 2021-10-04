import styled from "styled-components";

export const Wrapper = styled.div`
  border: 3px solid blue;

  height: 100%;

  left: -100%;

  opacity: 1;

  position: absolute;

  top: 0;

  transition: opacity ${({ theme }) => theme.times.drawerTransitionDuration}ms
      ease-in-out,
    left ${({ theme }) => theme.times.drawerTransitionDuration}ms ease-in-out;

  width: 100%;
`;
