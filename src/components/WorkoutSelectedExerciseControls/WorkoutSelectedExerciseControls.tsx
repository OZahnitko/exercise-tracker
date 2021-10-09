import { useState } from "react";

import { Exercise } from "../../contracts";
import { ControlsContainer, ControlsWrapper, Wrapper } from "./Styles";

interface WorkoutSelectedExerciseControlsProps {
  exercise: Exercise;
}

const WorkoutSelectedExerciseControls = ({
  exercise,
}: WorkoutSelectedExerciseControlsProps) => {
  if (exercise.type.includes("resistance")) {
    return <ResistanceExerciseControls />;
  } else {
    return <h1>Cardio</h1>;
  }
};

export default WorkoutSelectedExerciseControls;

const ResistanceExerciseControls = () => {
  const [weight, setWeight] = useState(100);
  const [reps, setReps] = useState(6);
  const [sets, setSets] = useState(3);

  return (
    <Wrapper>
      <ControlsContainer>
        <h3>Weight</h3>
        <ControlsWrapper>
          <div
            onClick={() => {
              console.log("minus");
            }}
            style={{ marginRight: "12px" }}
          >
            <h2>-</h2>
          </div>
          <div style={{ marginRight: "12px" }}>
            <h2>{weight}</h2>
          </div>
          <div>
            <h2>+</h2>
          </div>
        </ControlsWrapper>
      </ControlsContainer>
      <ControlsContainer>
        <h3>Reps</h3>
        <ControlsWrapper>
          <div style={{ marginRight: "12px" }}>
            <h2>-</h2>
          </div>
          <div style={{ marginRight: "12px" }}>
            <h2>{reps}</h2>
          </div>
          <div>
            <h2>+</h2>
          </div>
        </ControlsWrapper>
      </ControlsContainer>
      <ControlsContainer>
        <h3>Sets</h3>
        <ControlsWrapper>
          <div style={{ marginRight: "12px" }}>
            <h2>-</h2>
          </div>
          <div style={{ marginRight: "12px" }}>
            <h2>{sets}</h2>
          </div>
          <div>
            <h2>+</h2>
          </div>
        </ControlsWrapper>
      </ControlsContainer>
    </Wrapper>
  );
};
