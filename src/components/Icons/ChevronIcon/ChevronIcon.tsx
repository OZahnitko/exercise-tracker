import { StyledSVG } from "./Styles";

interface ChevronIconProps {
  rotated: boolean;
}

const ChevronIcon = ({ rotated }: ChevronIconProps) => {
  return (
    <StyledSVG
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      rotated={rotated}
    >
      <path
        d="M19.8533 9L12.8323 16L5.81139 9"
        stroke="#111827"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSVG>
  );
};

export default ChevronIcon;
