import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface Exercise {
  aoe: string[];
  name: string;
}

export interface ExercisesState {
  exercises: Exercise[];
  selectedNewWorkoutExercises: Exercise[];
}

const initialState: ExercisesState = {
  exercises: [],
  selectedNewWorkoutExercises: [],
};

export const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    setExercises: (state, { payload }: PayloadAction<Exercise[]>) => ({
      ...state,
      exercises: payload,
    }),
    setSelectedNewWorkoutExercises: (
      state,
      { payload }: PayloadAction<Exercise[]>
    ) => ({ ...state, selectedNewWorkoutExercises: payload }),
  },
});

export const { setExercises, setSelectedNewWorkoutExercises } =
  exercisesSlice.actions;

export const getExercises = ({ exercises: { exercises } }: RootState) =>
  exercises;

export const getSelectedNewWorkoutExercises = ({
  exercises: { selectedNewWorkoutExercises },
}: RootState) => selectedNewWorkoutExercises;

export default exercisesSlice.reducer;
