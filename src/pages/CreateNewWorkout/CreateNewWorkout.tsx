import { useEffect, useRef, useState } from "react";

import { CrossIconTypes } from "../../components/Icons/CrossIcon/CrossIcon";
import { Status } from "../../components/Icons/TrashIcon/TrashIcon";

import {
  CrossIcon,
  TrashIcon,
  WorkoutAreaPicker,
  WorkoutAreaExercises,
  WorkoutSelectedExercises,
} from "../../components";
import { Exercise } from "../../contracts";

import {
  useAppDispatch,
  useAppSelector,
  useUIHooks,
  useWorkoutHooks,
} from "../../hooks";
import { addSelectedExercise, getSelectedExercises } from "../../store";
import {
  ExerciseListWrapper,
  HeadingIconWrapper,
  HeadingWrapper,
  SelectedExercisesWrapper,
  Wrapper,
} from "./Styles";
import { fetchExercises } from "../../utility";

const CreateNewWorkout = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const selectedExercises = useAppSelector(getSelectedExercises);

  const staticWrapperRef = useRef<HTMLDivElement | null>(null);

  const { closeDrawer } = useUIHooks();
  const { clearSelectedExercises } = useWorkoutHooks();

  const handleAddSelectedExercise = (exercise: Exercise) =>
    dispatch(addSelectedExercise(exercise));

  const handleLoadExercises = async () => {
    const exercises = await fetchExercises();
    setExercises(() => exercises);
  };

  useEffect(() => {
    handleLoadExercises();
  }, []);

  return (
    <Wrapper>
      <div ref={staticWrapperRef}>
        <HeadingWrapper>
          <h3>Create New Workout</h3>
          <HeadingIconWrapper
            onClick={
              selectedExercises.length
                ? clearSelectedExercises
                : () => closeDrawer()
            }
          >
            {selectedExercises.length ? (
              <TrashIcon status={Status.active} />
            ) : (
              <CrossIcon type={CrossIconTypes.urgent} />
            )}
          </HeadingIconWrapper>
        </HeadingWrapper>
        <WorkoutAreaPicker
          callback={setSelectedArea}
          empty={
            exercises
              .filter((exercise) => exercise.aoe.includes(selectedArea!))
              .filter(
                (exercise) =>
                  !selectedExercises
                    .map((exercise) => exercise.name)
                    .includes(exercise.name)
              ).length === 0
          }
          exercises={exercises}
          selectedArea={selectedArea}
        />
      </div>
      <ExerciseListWrapper
        empty={
          exercises
            .filter((exercise) => exercise.aoe.includes(selectedArea!))
            .filter(
              (exercise) =>
                !selectedExercises
                  .map((exercise) => exercise.name)
                  .includes(exercise.name)
            ).length === 0
        }
        staticWrapperHeight={
          staticWrapperRef.current?.getBoundingClientRect().height!
        }
      >
        <WorkoutAreaExercises
          exercises={exercises
            .filter((exercise) => exercise.aoe.includes(selectedArea!))
            .filter(
              (exercise) =>
                !selectedExercises
                  .map((exercise) => exercise.name)
                  .includes(exercise.name)
            )
            .sort((a, b) => a.name.localeCompare(b.name))}
          onAddExercise={handleAddSelectedExercise}
        />
      </ExerciseListWrapper>
      {!!selectedExercises.length && (
        <SelectedExercisesWrapper
          staticWrapperHeight={
            staticWrapperRef.current?.getBoundingClientRect().height!
          }
        >
          <WorkoutSelectedExercises />
        </SelectedExercisesWrapper>
      )}
    </Wrapper>
  );
};

export default CreateNewWorkout;
