import { SelectedExerciseCard } from "./components";
import {
  getSelectedNewWorkoutExercises,
  useAppSelector,
} from "../../../../store";
import { Wrapper } from "./Styles";

const PickedExercises = () => {
  const selectedNewWorkoutExercises = useAppSelector(
    getSelectedNewWorkoutExercises
  );

  return (
    <Wrapper>
      {selectedNewWorkoutExercises.map((exercise) => (
        <SelectedExerciseCard
          key={exercise.name}
          exerciseName={exercise.name}
        />
      ))}
    </Wrapper>
  );
};

export default PickedExercises;
