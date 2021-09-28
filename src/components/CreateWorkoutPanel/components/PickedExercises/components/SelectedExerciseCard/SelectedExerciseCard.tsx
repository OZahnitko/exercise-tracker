import { FC, useState } from "react";

import {
  BarbellIcon,
  CheckIcon,
  ChevronDownIcon,
  CrossIcon,
} from "../../../../../Icons";
import {
  getSelectedNewWorkoutExercises,
  setSelectedNewWorkoutExercises,
  useAppDispatch,
  useAppSelector,
} from "../../../../../../store";
import {
  HeadingStartWrapper,
  HeadingWrapper,
  IconWrapper,
  IconWrapperAdmin,
  Wrapper,
} from "./Styles";

interface SelectedExerciseCardProps {
  exerciseName: string;
}

const SelectedExerciseCard: FC<SelectedExerciseCardProps> = ({
  exerciseName,
}) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const [selectionReady, setSelectionReady] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const selectedNewWorkoutExercises = useAppSelector(
    getSelectedNewWorkoutExercises
  );

  const removeExercise = (exercise: string) => {
    dispatch(
      setSelectedNewWorkoutExercises(
        selectedNewWorkoutExercises.filter(
          (selectedExercise) => selectedExercise.name !== exercise
        )
      )
    );
  };

  return (
    <Wrapper>
      <HeadingWrapper>
        <HeadingStartWrapper>
          <IconWrapper>
            <BarbellIcon />
          </IconWrapper>
          {exerciseName}
        </HeadingStartWrapper>
        <IconWrapperAdmin>
          {selectionReady ? <CheckIcon /> : null}
          <ChevronDownIcon
            onClick={() => setExpanded((expanded) => !expanded)}
            rotated={expanded}
          />
          <CrossIcon onClick={() => removeExercise(exerciseName)} />
        </IconWrapperAdmin>
      </HeadingWrapper>
      {expanded ? (
        <div>
          <div>Weight</div>
          <div>Reps</div>
          <div>Sets</div>
        </div>
      ) : null}
    </Wrapper>
  );
};

export default SelectedExerciseCard;
