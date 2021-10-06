import styled from "styled-components";

interface StyledSVGProps {
  rotated: Boolean;
}

export const StyledSVG = styled.svg<StyledSVGProps>`
  transform: rotate(${(props) => (props.rotated ? 180 : 0)}deg);

  transition: all 0.25s ease-in-out;
`;
