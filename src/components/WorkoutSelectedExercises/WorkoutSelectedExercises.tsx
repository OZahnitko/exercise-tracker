import { useState } from "react";

import {
  ChevronIcon,
  CrossIcon,
  ResistanceIcon,
  WorkoutSelectedExerciseControls,
} from "..";
import { Exercise } from "../../contracts";
import { useWorkoutHooks } from "../../hooks";
import {
  ControlsContainer,
  ExpandedContentWrapper,
  HeaderWrapper,
  IconContainer,
  InformationContainer,
  MainIconContainer,
  SelectedExerciseWrapper,
  Wrapper,
} from "./Styles";

interface SelectedExerciseProps {
  exercise: Exercise;
}

const WorkoutSelectedExercises = () => {
  const { selectedExercises } = useWorkoutHooks();

  return (
    <Wrapper>
      {selectedExercises.map((exercise) => (
        <SelectedExercise exercise={exercise} key={exercise.name} />
      ))}
    </Wrapper>
  );
};

export default WorkoutSelectedExercises;

const SelectedExercise = ({ exercise }: SelectedExerciseProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const { removeSelectedExercise } = useWorkoutHooks();

  return (
    <SelectedExerciseWrapper key={exercise.name}>
      <HeaderWrapper>
        <InformationContainer>
          <MainIconContainer>
            <ResistanceIcon />
          </MainIconContainer>
          {exercise.name}
        </InformationContainer>
        <ControlsContainer>
          <IconContainer onClick={() => setExpanded((expanded) => !expanded)}>
            <ChevronIcon rotated={expanded} />
          </IconContainer>
          <IconContainer onClick={() => removeSelectedExercise(exercise)}>
            <CrossIcon />
          </IconContainer>
        </ControlsContainer>
      </HeaderWrapper>
      {expanded && (
        <ExpandedContentWrapper>
          <WorkoutSelectedExerciseControls exercise={exercise} />
        </ExpandedContentWrapper>
      )}
    </SelectedExerciseWrapper>
  );
};
