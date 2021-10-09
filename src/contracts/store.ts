import type { Exercise } from "./localStorage";

export interface AppState {
  currentDate: string;
  initializing: boolean;
  searchString: string;
  selectedDate: string;
}

export interface DrawerState {
  callback: (() => void) | undefined;
  Content: (() => JSX.Element) | undefined;
  direction: AppDrawerDirection | undefined;
  open: boolean;
}
export interface UIState {
  drawer: DrawerState;
}

export interface WorkoutState {
  selectedExercises: Exercise[];
}

export enum AppDrawerDirection {
  top = "top",
  right = "right",
  bottom = "bottom",
  left = "left",
}
