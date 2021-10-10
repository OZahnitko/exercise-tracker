import { Dispatch, SetStateAction, useEffect, useState } from "react";

import {
  ArrowIcon,
  ArrowIconDirection,
  CircleCheckIcon,
  CrossIcon,
  TrashIcon,
} from "../../components";
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
  NewWorkoutEditorWrapper,
  Wrapper,
} from "./Styles";
import { fetchExercises, reduceUniqueAreasOfEffect } from "../../utility";

const NewWorkout = () => {
  const [stepOne, setStepOne] = useState<boolean>(true);
  const [stepTwo, setStepTwo] = useState<boolean>(false);

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

  useEffect(() => {
    if (!selectedExercises.length) setStepOne(() => true);
  }, [selectedExercises]);

  useEffect(() => {
    if (stepOne) setStepTwo(() => false);
  }, [stepOne]);

  useEffect(() => {
    if (stepTwo) setStepOne(() => false);
  }, [stepTwo]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeadingTextContainer>
          <h3>
            {stepOne ? "Pick Workout Exercises" : "Edit Selected Exercises"}
          </h3>
        </HeadingTextContainer>
        <HeadingControlsContainer>
          {selectedExercises.length ? (
            <>
              {stepOne ? (
                <IconContainer onClick={clearSelectedExercises}>
                  <TrashIcon status={Status.active} />
                </IconContainer>
              ) : (
                <IconContainer>
                  <CircleCheckIcon />
                </IconContainer>
              )}
              <IconContainer
                onClick={
                  stepOne
                    ? () => setStepTwo(() => true)
                    : () => setStepOne(() => true)
                }
              >
                <ArrowIcon
                  direction={
                    stepOne ? ArrowIconDirection.right : ArrowIconDirection.left
                  }
                />
              </IconContainer>
            </>
          ) : (
            <IconContainer onClick={closeDrawer}>
              <CrossIcon type={CrossIconTypes.urgent} />
            </IconContainer>
          )}
        </HeadingControlsContainer>
      </HeaderWrapper>
      {stepOne && (
        <>
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
              .filter((exercise) =>
                exercise.aoe.includes(selectedExerciseArea!)
              )
              .map((exercise) => (
                <ExerciseCard
                  key={exercise.name}
                  exercise={exercise}
                  selected={
                    !!selectedExercises.find(
                      (selectedExercise) =>
                        selectedExercise.name === exercise.name
                    )
                  }
                />
              ))}
          </ExerciseListContainer>
        </>
      )}
      {stepTwo && <NewWorkoutEditor />}
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

const NewWorkoutEditor = () => {
  const { selectedExercises } = useWorkoutHooks();

  return (
    <NewWorkoutEditorWrapper>
      <pre>{JSON.stringify({ selectedExercises }, null, 2)}</pre>
    </NewWorkoutEditorWrapper>
  );
};
