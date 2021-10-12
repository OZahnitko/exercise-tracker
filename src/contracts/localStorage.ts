export interface Data {
  lastUpdatedOn: string;
  exercises: Exercise[];
}

export interface Exercise {
  aoe: string[];
  defaultValues: ExerciseDefaultValues;
  name: string;
  type: string[];
}

export interface ExerciseDefaultValues {
  weight: number;
}
