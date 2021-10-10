import { StyledSVG } from "./Styles";

export enum ArrowIconDirection {
  up = "up",
  right = "right",
  down = "down",
  left = "left",
}

export interface ArrowIconProps {
  direction?: ArrowIconDirection;
}

const ArrowIcon = ({ direction }: ArrowIconProps) => {
  return (
    <StyledSVG
      pointDirection={direction || ArrowIconDirection.up}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 10L12 3M12 3L19 10M12 3V21"
        stroke="#111827"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSVG>
  );
};

export default ArrowIcon;
