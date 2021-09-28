import { useEffect, useRef } from "react";

import { ExercisePicker, PickedExercises } from "./components";
import {
  addObservedElement,
  getSelectedNewWorkoutExercises,
  setExercises,
  setShowCreateWorkoutPanel,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { HeadingWrapper, Wrapper } from "./Styles";
import { fetchExercises } from "../../utility";

const CreateWorkoutPanel = () => {
  const dispatch = useAppDispatch();
  const selectedNewWorkoutExercises = useAppSelector(
    getSelectedNewWorkoutExercises
  );

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
      <HeadingWrapper>
        <h3>Create New Workout</h3>
      </HeadingWrapper>
      <ExercisePicker />
      {selectedNewWorkoutExercises.length ? <PickedExercises /> : null}
    </Wrapper>
  );
};

export default CreateWorkoutPanel;
