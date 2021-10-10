import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { CrossIcon, TrashIcon } from "../../components";
import { CrossIconTypes } from "../../components/Icons/CrossIcon/CrossIcon";
import { Status } from "../../components/Icons/TrashIcon/TrashIcon";
import type { Exercise } from "../../contracts";
import { useUIHooks, useWorkoutHooks } from "../../hooks";
import {
  ExerciseAreaChipWrapper,
  ExerciseAreaContainer,
  ExerciseCardWrapper,
  ExerciseListContainer,
  HeaderWrapper,
  HeadingControlsContainer,
  HeadingTextContainer,
  IconContainer,
  Wrapper,
} from "./Styles";
import { fetchExercises, reduceUniqueAreasOfEffect } from "../../utility";

const NewWorkout = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [exerciseAreas, setExerciseAreas] = useState<string[]>([]);
  const [selectedExerciseArea, setSelectedExerciseArea] = useState<
    string | undefined
  >(undefined);

  const { closeDrawer } = useUIHooks();
  const { clearSelectedExercises, selectedExercises } = useWorkoutHooks();

  const handleFetchExercises = async () => {
    const exercises = await fetchExercises();

    setExercises(() => exercises);
  };

  useEffect(() => {
    handleFetchExercises();
  }, []);

  useEffect(() => {
    if (exercises.length)
      setExerciseAreas(() => reduceUniqueAreasOfEffect(exercises));
  }, [exercises]);

  useEffect(() => {
    if (exerciseAreas.length) setSelectedExerciseArea(() => exerciseAreas[0]);
  }, [exerciseAreas]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeadingTextContainer>
          <h3>Create New Workout</h3>
        </HeadingTextContainer>
        <HeadingControlsContainer>
          {selectedExercises.length ? (
            <IconContainer onClick={clearSelectedExercises}>
              <TrashIcon status={Status.active} />
            </IconContainer>
          ) : (
            <IconContainer onClick={closeDrawer}>
              <CrossIcon type={CrossIconTypes.urgent} />
            </IconContainer>
          )}
        </HeadingControlsContainer>
      </HeaderWrapper>
      <ExerciseAreaContainer>
        {exerciseAreas.map((area) => (
          <ExerciseAreaChip
            area={area}
            key={area}
            onSelect={setSelectedExerciseArea}
            selected={selectedExerciseArea === area}
          />
        ))}
      </ExerciseAreaContainer>
      <ExerciseListContainer>
        {exercises
          .filter((exercise) => exercise.aoe.includes(selectedExerciseArea!))
          .map((exercise) => (
            <ExerciseCard
              key={exercise.name}
              exercise={exercise}
              selected={
                !!selectedExercises.find(
                  (selectedExercise) => selectedExercise.name === exercise.name
                )
              }
            />
          ))}
      </ExerciseListContainer>
    </Wrapper>
  );
};

export default NewWorkout;

interface ExerciseAreaChipProps {
  area: string;
  onSelect: Dispatch<SetStateAction<string | undefined>>;
  selected: boolean;
}

export const ExerciseAreaChip = ({
  area,
  onSelect,
  selected,
}: ExerciseAreaChipProps) => {
  return (
    <ExerciseAreaChipWrapper
      onClick={() => onSelect(() => area)}
      selected={selected}
    >
      <h3>{area}</h3>
    </ExerciseAreaChipWrapper>
  );
};

interface ExerciseCardProps {
  exercise: Exercise;
  selected: boolean;
}

export const ExerciseCard = ({ exercise, selected }: ExerciseCardProps) => {
  const { addSelectedExercise, removeSelectedExercise } = useWorkoutHooks();

  return (
    <ExerciseCardWrapper
      onClick={() =>
        selected
          ? removeSelectedExercise(exercise)
          : addSelectedExercise(exercise)
      }
      selected={selected}
    >
      {exercise.name}
    </ExerciseCardWrapper>
  );
};
