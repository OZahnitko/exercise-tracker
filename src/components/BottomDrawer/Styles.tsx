import styled from "styled-components";

interface WrapperProps {
  elementHeight: number | undefined;
}

export const Wrapper = styled.div<WrapperProps>`
  background: white;
  border-radius: 15px 15px 0 0;
  bottom: -${(props) => props.elementHeight}px;
  box-shadow: 0px 1px 15px 1px rgba(0, 0, 0, 0.2);

  left: 0;

  max-height: 75%;

  opacity: 0;

  padding: ${({ theme }) => theme.sizes.mainPadding}px;
  position: absolute;

  transform: translateZ(0);
  transition: opacity ${({ theme }) => theme.times.drawerTransitionDuration}ms
      ease-in-out,
    bottom ${({ theme }) => theme.times.drawerTransitionDuration}ms ease-in-out;

  width: 100%;
`;
