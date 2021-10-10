import styled from "styled-components";

import { ArrowIconDirection } from "./ArrowIcon";

interface StyledSVGProps {
  pointDirection: ArrowIconDirection;
}

export const StyledSVG = styled.svg<StyledSVGProps>`
  transform: rotate(
    ${(props) =>
      props.pointDirection === ArrowIconDirection.right
        ? "90"
        : props.pointDirection === ArrowIconDirection.down
        ? "180"
        : props.pointDirection === ArrowIconDirection.left
        ? "270"
        : "0"}deg
  );

  transition: transform 0.25s ease-in-out;
`;
