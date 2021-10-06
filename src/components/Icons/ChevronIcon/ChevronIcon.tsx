import { FC } from "react";

import { StyledSVG } from "./Styles";

interface ChevronIcon {
  rotated: boolean;
  onClick?: () => void;
}

const ChevronIcon: FC<ChevronIcon> = ({ onClick = () => {}, rotated }) => {
  return (
    <StyledSVG
      fill="none"
      height="24"
      onClick={onClick}
      rotated={rotated}
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 9L12 16L5 9"
        stroke="#111827"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </StyledSVG>
  );
};

export default ChevronIcon;
