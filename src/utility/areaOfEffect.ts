import { Exercise } from "../contracts";

export const reduceUniqueAreasOfEffect = (exercises: Exercise[]): string[] => {
  const allExercises = exercises.reduce((acc, exercise) => {
    const unique = [];

    for (const area of exercise.aoe) {
      if (!acc.includes(area)) {
        unique.push(area);
      }
    }

    return [...acc, ...unique];
  }, [] as string[]);

  return allExercises.sort((a, b) => a.localeCompare(b));
};
