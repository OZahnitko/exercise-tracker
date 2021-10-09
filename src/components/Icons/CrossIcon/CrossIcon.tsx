export enum CrossIconTypes {
  normal = "normal",
  urgent = "urgent",
}

interface CrossIconProps {
  type?: CrossIconTypes;
}

const CrossIcon = ({ type = CrossIconTypes.normal }: CrossIconProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.91615 18L18.9521 6M6.91615 6L18.9521 18"
        stroke={type === CrossIconTypes.urgent ? "red" : "#111827"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CrossIcon;
