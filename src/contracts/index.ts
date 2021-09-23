export interface Exercise {
  name: string;
}

export interface Data {
  lastUpdatedOn: string;
  exercises: Exercise[];
}

export interface AppState {
  currentDate: string;
  selectedDate: string | undefined;
}
