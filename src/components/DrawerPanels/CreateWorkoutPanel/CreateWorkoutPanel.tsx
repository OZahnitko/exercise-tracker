import { useEffect, useRef, useState } from "react";

import type { Dispatch, FC, SetStateAction } from "react";

import { NewWorkoutSelectedExercise } from "../..";
import {
  getExercises,
  getSelectedNewWorkoutExercises,
  setExercises,
  setSelectedNewWorkoutExercises,
  useAppDispatch,
  useAppSelector,
} from "../../../store";
import {
  ExerciseAreaChipWrapper,
  ExerciseAreaPickerWrapper,
  ExerciseChipWrapper,
  ExerciseListWrapper,
  ExercisePickerWrapper,
  HeadingWrapper,
  SelectedExercisesWrapper,
  Wrapper,
} from "./Styles";
import { fetchExercises } from "../../../utility";

export interface Exercise {
  aoe: string[];
  name: string;
}

export interface ExerciseAreaChipProps {
  areaName: string;
  selected: boolean;
  onClickCallback: Dispatch<SetStateAction<string | undefined>>;
}

export const ExerciseAreaChip: FC<ExerciseAreaChipProps> = ({
  areaName,
  selected,
  onClickCallback,
}) => {
  return (
    <ExerciseAreaChipWrapper
      onClick={() => onClickCallback(() => areaName)}
      selected={selected}
    >
      {areaName
        .split(/(\s)/g)
        .map((word) => `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`)
        .join(" ")}
    </ExerciseAreaChipWrapper>
  );
};

export interface ExerciseChipProps {
  exercise: Exercise;
  onClickCallback: (exercise: Exercise) => void;
  size: number;
}

export const ExerciseChip: FC<ExerciseChipProps> = ({
  exercise,
  onClickCallback,
  size,
}) => {
  return (
    <ExerciseChipWrapper
      height={size}
      onClick={() => onClickCallback(exercise)}
    >
      {exercise.name
        .split(/(\s)/g)
        .map((word) => `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`)
        .join(" ")}
    </ExerciseChipWrapper>
  );
};

export const ExercisePicker = () => {
  const [allAreas, setAllAreas] = useState<string[]>([]);
  const [selectedArea, setSelectedArea] = useState<string | undefined>(
    undefined
  );

  const dispatch = useAppDispatch();

  const exercises = useAppSelector(getExercises);
  const selectedNewWorkoutExercises = useAppSelector(
    getSelectedNewWorkoutExercises
  );

  const exerciseListWrapperRef = useRef<HTMLDivElement | null>(null);

  const addSelectedExercise = (exercise: Exercise) => {
    if (!selectedNewWorkoutExercises.includes(exercise)) {
      dispatch(
        setSelectedNewWorkoutExercises([
          ...selectedNewWorkoutExercises,
          exercise,
        ])
      );
    }
  };

  useEffect(() => {
    if (exercises.length) {
      const all = exercises.reduce((allAreasOfEffect, exercise) => {
        const unique = [];
        for (const area of exercise.aoe) {
          if (!allAreasOfEffect.includes(area)) {
            unique.push(area);
          }
        }
        return [...allAreasOfEffect, ...unique];
      }, [] as string[]);

      setAllAreas(() => all);
    }
  }, [exercises]);

  useEffect(() => {
    if (allAreas.length) {
      setSelectedArea(() => allAreas[0]);
    }
  }, [allAreas]);

  return (
    <ExercisePickerWrapper>
      <ExerciseAreaPickerWrapper>
        {allAreas
          .sort((a, b) => a.localeCompare(b))
          .map((areaName) => (
            <ExerciseAreaChip
              areaName={areaName}
              key={areaName}
              onClickCallback={setSelectedArea}
              selected={areaName === selectedArea}
            />
          ))}
      </ExerciseAreaPickerWrapper>
      {selectedArea && (
        <ExerciseListWrapper
          chipSize={
            exerciseListWrapperRef.current
              ? (exerciseListWrapperRef.current.getBoundingClientRect().width -
                  20) /
                3
              : 0
          }
          isEmpty={
            !exercises
              .filter((exercise) => exercise.aoe.includes(selectedArea))
              .filter(
                (exercise) =>
                  !selectedNewWorkoutExercises
                    .map((exercise) => exercise.name)
                    .includes(exercise.name)
              ).length
          }
          ref={exerciseListWrapperRef}
        >
          {exercises
            .filter(({ aoe }) => aoe.includes(selectedArea))
            .filter(
              (exercise) =>
                !selectedNewWorkoutExercises
                  .map((exercise) => exercise.name)
                  .includes(exercise.name)
            )
            .map((exercise) => (
              <ExerciseChip
                exercise={exercise}
                key={exercise.name}
                onClickCallback={addSelectedExercise}
                size={
                  exerciseListWrapperRef.current
                    ? (exerciseListWrapperRef.current.getBoundingClientRect()
                        .width -
                        20) /
                      3
                    : 0
                }
              />
            ))}
        </ExerciseListWrapper>
      )}
      <SelectedExercisesWrapper>
        {selectedNewWorkoutExercises.map((exercise) => (
          <NewWorkoutSelectedExercise exercise={exercise} key={exercise.name} />
        ))}
      </SelectedExercisesWrapper>
    </ExercisePickerWrapper>
  );
};

const CreateWorkoutPanel = () => {
  const dispatch = useAppDispatch();

  const loadExercises = async () => {
    const data = await fetchExercises();
    dispatch(setExercises(data));
  };
  useEffect(() => {
    loadExercises();
  }, []);

  return (
    <Wrapper>
      <HeadingWrapper>
        <h3>Create New Workout</h3>
      </HeadingWrapper>
      <ExercisePicker />
    </Wrapper>
  );
};

export default CreateWorkoutPanel;
