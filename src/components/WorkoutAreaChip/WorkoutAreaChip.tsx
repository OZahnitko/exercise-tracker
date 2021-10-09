import { Wrapper } from "./Styles";

interface WorkoutAreaChipProps {
  name: string;
  onClick: (name: string) => void;
  selected: boolean;
}

const WorkoutAreaChip = ({ name, onClick, selected }: WorkoutAreaChipProps) => {
  return (
    <Wrapper onClick={() => onClick(name)} selected={selected}>
      <h3>{name}</h3>
    </Wrapper>
  );
};

export default WorkoutAreaChip;
