import { useEffect, useState } from "react";

import type { Exercise } from "../../../../contracts";
import {
  getExercises,
  getSelectedNewWorkoutExercises,
  setSelectedNewWorkoutExercises,
  useAppDispatch,
  useAppSelector,
} from "../../../../store";
import { Wrapper } from "./Styles";

const ExercisePicker = () => {
  const [allAreas, setAllAreas] = useState<string[]>([]);
  const [selectedArea, setSelectedArea] = useState<string | undefined>(
    undefined
  );

  const dispatch = useAppDispatch();
  const exercises = useAppSelector(getExercises);
  const selectedNewWorkoutExercises = useAppSelector(
    getSelectedNewWorkoutExercises
  );

  const addSelectedExercise = (exercise: Exercise) => {
    if (!selectedNewWorkoutExercises.includes(exercise)) {
      dispatch(
        setSelectedNewWorkoutExercises([
          ...selectedNewWorkoutExercises,
          exercise,
        ])
      );
    }
  };

  useEffect(() => {
    if (exercises.length) {
      const all = exercises.reduce((allAreasOfEffect, exercise) => {
        const unique = [];
        for (const a of exercise.aoe) {
          if (!allAreasOfEffect.includes(a)) {
            unique.push(a);
          }
        }
        return [...allAreasOfEffect, ...unique];
      }, [] as string[]);

      setAllAreas(() => all);
    }
  }, [exercises]);

  useEffect(() => {
    if (allAreas.length) {
      setSelectedArea(() => allAreas[0]);
    }
  }, [allAreas]);

  return (
    <Wrapper>
      <div style={{ display: "flex", overflow: "auto hidden" }}>
        {allAreas.map((areaName) => (
          <div key={areaName} style={{ flexShrink: 0 }}>
            <button
              onClick={() => setSelectedArea(() => areaName)}
              style={{ margin: "0 5px 10px 5px" }}
            >
              {areaName}
            </button>
          </div>
        ))}
      </div>

      <div>
        {selectedArea &&
          exercises
            .filter((exercise) => exercise.aoe.includes(selectedArea))
            .filter(
              (exercise) =>
                !selectedNewWorkoutExercises
                  .map((exercise) => exercise.name)
                  .includes(exercise.name)
            )
            .map((exercise) => (
              <div
                key={exercise.name}
                onClick={() => addSelectedExercise(exercise)}
              >
                {exercise.name}
              </div>
            ))}
      </div>
    </Wrapper>
  );
};

export default ExercisePicker;
