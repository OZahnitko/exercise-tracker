export interface Exercise {
  aoe: string[];
  name: string;
}

export interface Data {
  lastUpdatedOn: string;
  exercises: Exercise[];
}

export interface AppState {
  currentDate: string;
  initializing: boolean;
  searchString: string;
  selectedDate: string | undefined;
}

export interface ExercisesState {
  exercises: Exercise[];
}
