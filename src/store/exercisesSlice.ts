import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

import { Exercise, ExercisesState } from "../contracts";

const initialState: ExercisesState = {
  exercises: [],
};

export const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    setExercises: (state, { payload }: PayloadAction<Exercise[]>) => ({
      ...state,
      exercises: payload,
    }),
  },
});

export const { setExercises } = exercisesSlice.actions;

export const getExercises = ({ exercises }: RootState) => exercises;

export default exercisesSlice.reducer;
