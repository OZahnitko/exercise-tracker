import styled from "styled-components";

interface StyledSVGProps {
  rotated: boolean;
}

export const StyledSVG = styled.svg<StyledSVGProps>`
  transform: rotate(${(props) => (props.rotated ? 180 : 0)}deg);

  transition: transform 0.25s ease-in-out;
`;
