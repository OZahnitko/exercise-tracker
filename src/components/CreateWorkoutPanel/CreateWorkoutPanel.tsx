import { useEffect, useRef } from "react";

import {
  getExercises,
  addObservedElement,
  setExercises,
  setShowCreateWorkoutPanel,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { Wrapper } from "./Styles";
import { fetchExercises } from "../../utility";

const CreateWorkoutPanel = () => {
  const dispatch = useAppDispatch();

  const exercises = useAppSelector(getExercises);

  const wrapperRef = useRef(null);

  const loadExercises = async () => {
    const data = await fetchExercises();
    dispatch(setExercises(data));
  };
  useEffect(() => {
    loadExercises();
  }, []);

  useEffect(() => {
    if (exercises) {
      console.log(exercises);
    }
  }, [exercises]);

  useEffect(() => {
    if (wrapperRef.current) {
      dispatch(
        addObservedElement({
          element: wrapperRef.current!,
          callback: () => dispatch(setShowCreateWorkoutPanel(false)),
        })
      );
    }
  }, [wrapperRef]);

  return (
    <Wrapper ref={wrapperRef}>
      <h2>Create New Workout</h2>
      <div>Pick from</div>
      <div>picked</div>
      <pre>{JSON.stringify({ exercises }, null, 2)}</pre>
      {exercises.map((exercise) => (
        <div key={exercise.name}>
          <p>{exercise.name}</p>
        </div>
      ))}
    </Wrapper>
  );
};

export default CreateWorkoutPanel;
