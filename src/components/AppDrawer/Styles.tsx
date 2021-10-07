import styled from "styled-components";

import { AppDrawerEnterDirection } from "../../contracts";

interface WrapperProps {
  direction: AppDrawerEnterDirection | undefined;
  elementHeight: number | undefined;
}

export const Wrapper = styled.div<WrapperProps>`
  background: white;
  border-radius: ${(props) =>
    props.direction === AppDrawerEnterDirection.bottom
      ? "15px 15px 0 0 "
      : props.direction === AppDrawerEnterDirection.top
      ? "0 0 15px 15px"
      : "0 15px 15px 0"};
  // bottom: -200px;

  ${(props) => {
    console.log(props.direction === AppDrawerEnterDirection.bottom);
    if (props.direction === AppDrawerEnterDirection.bottom) {
      return "bottom: -200px;";
    }
  }}

  box-shadow: 0px 1px 15px 1px rgba(0, 0, 0, 0.2);

  left: 0;

  max-height: 75%;

  opacity: 0;

  position: absolute;

  transform: translateZ(0);
  transition: opacity ${(props) => props.theme.times.drawerTransitionDuration}ms
      ease-in-out,
    bottom ${(props) => props.theme.times.drawerTransitionDuration}ms
      ease-in-out;

  width: 100%;
`;
