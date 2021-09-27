import { useEffect, useRef } from "react";

import { ExercisePicker } from "./components";
import {
  addObservedElement,
  setExercises,
  setShowCreateWorkoutPanel,
  useAppDispatch,
} from "../../store";
import { Wrapper } from "./Styles";
import { fetchExercises } from "../../utility";

const CreateWorkoutPanel = () => {
  const dispatch = useAppDispatch();

  const wrapperRef = useRef(null);

  const loadExercises = async () => {
    const data = await fetchExercises();
    dispatch(setExercises(data));
  };
  useEffect(() => {
    loadExercises();
  }, []);

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
      <h3>Create New Workout</h3>
      <ExercisePicker />
      <div>picked</div>
    </Wrapper>
  );
};

export default CreateWorkoutPanel;
