import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";
import type { Exercise, WorkoutState } from "../contracts";

const initialState: WorkoutState = {
  selectedExercises: [],
};

export const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    addSelectedExercise: (state, { payload }: PayloadAction<Exercise>) => {
      if (
        !state.selectedExercises.find(
          (exercise) => exercise.name === payload.name
        )
      ) {
        return {
          ...state,
          selectedExercises: [...state.selectedExercises, payload],
        };
      } else return state;
    },
    clearSelectedExercises: (state) => ({ ...state, selectedExercises: [] }),
    removeSelectedExercise: (state, { payload }: PayloadAction<Exercise>) => ({
      ...state,
      selectedExercises: state.selectedExercises.filter(
        (exercise) => exercise.name !== payload.name
      ),
    }),
  },
});

export const {
  addSelectedExercise,
  clearSelectedExercises,
  removeSelectedExercise,
} = workoutSlice.actions;

export const getSelectedExercises = ({
  workout: { selectedExercises },
}: RootState) => selectedExercises;

export default workoutSlice.reducer;
