import { useAppDispatch, useAppSelector } from ".";
import { Exercise } from "../contracts";
import {
  addSelectedExercise,
  clearSelectedExercises,
  getSelectedExercises,
  removeSelectedExercise,
} from "../store";

export const useWorkoutHooks = () => {
  const dispatch = useAppDispatch();

  return {
    addSelectedExercise: (exercise: Exercise) =>
      dispatch(addSelectedExercise(exercise)),
    clearSelectedExercises: () => dispatch(clearSelectedExercises()),
    removeSelectedExercise: (exercise: Exercise) =>
      dispatch(removeSelectedExercise(exercise)),
    selectedExercises: useAppSelector(getSelectedExercises),
  };
};
