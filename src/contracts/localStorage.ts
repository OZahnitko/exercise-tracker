export interface Data {
  lastUpdatedOn: string;
  exercises: Exercise[];
}

export interface Exercise {
  aoe: string[];
  name: string;
  type: string[];
}
