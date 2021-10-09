import { Exercise } from "../../contracts";
import { ExerciseWrapper, Wrapper } from "./Styles";

interface WorkoutAreaExercisesProps {
  exercises: Exercise[];
  onAddExercise: (exercise: Exercise) => void;
}

const WorkoutAreaExercises = ({
  exercises,
  onAddExercise,
}: WorkoutAreaExercisesProps) => {
  return (
    <Wrapper>
      {exercises.map((exercise) => (
        <ExerciseWrapper
          key={exercise.name}
          onClick={() => onAddExercise(exercise)}
        >
          {exercise.name}
        </ExerciseWrapper>
      ))}
    </Wrapper>
  );
};

export default WorkoutAreaExercises;
