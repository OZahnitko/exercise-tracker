import { Wrapper } from "./Styles";

interface WorkoutAreaChipProps {
  name: string;
  onClick: (name: string) => void;
  selected: boolean;
}

const WorkoutAreaChip = ({ name, onClick, selected }: WorkoutAreaChipProps) => {
  return (
    <Wrapper onClick={() => onClick(name)} selected={selected}>
      {name}
    </Wrapper>
  );
};

export default WorkoutAreaChip;
