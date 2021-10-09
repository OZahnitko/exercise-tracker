import { useAppDispatch, useAppSelector } from ".";
import { Exercise } from "../contracts";
import {
  clearSelectedExercises,
  getSelectedExercises,
  removeSelectedExercise,
} from "../store";

export const useWorkoutHooks = () => {
  const dispatch = useAppDispatch();

  return {
    clearSelectedExercises: () => dispatch(clearSelectedExercises()),
    removeSelectedExercise: (exercise: Exercise) =>
      dispatch(removeSelectedExercise(exercise)),
    selectedExercises: useAppSelector(getSelectedExercises),
  };
};
