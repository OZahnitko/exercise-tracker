import { Wrapper } from "./Styles";

interface WorkoutAreaChipProps {
  name: string;
  onClick: (name: string) => void;
  selected: boolean;
}

const WorkoutAreaChip = ({ name, onClick, selected }: WorkoutAreaChipProps) => {
  return (
    <Wrapper onClick={() => onClick(name)} selected={selected}>
      <h2>{name}</h2>
    </Wrapper>
  );
};

export default WorkoutAreaChip;
