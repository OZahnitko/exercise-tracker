import { DateTime } from "luxon";

export interface Exercise {
  name: string;
}

export interface Data {
  lastUpdatedOn: DateTime;
  exercises: Exercise[];
}

export interface AppState {
  currentDate: string;
  selectedDate: string | undefined;
}
