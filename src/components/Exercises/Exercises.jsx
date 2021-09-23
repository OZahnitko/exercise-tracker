import { useEffect } from "react";

import {
  getExercises,
  setExercises,
  getInitializingState,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { fetchData } from "../../utility";

const Exercises = () => {
  const dispatch = useAppDispatch();
  const exerciseList = useAppSelector(getExercises);
  const initializingState = useAppSelector(getInitializingState);

  const getData = async () => {
    const exerciseData = await fetchData();
    console.log(exerciseData.exercises);
    dispatch(setExercises(exerciseData.exercises));
  };

  useEffect(() => {
    if (!initializingState) {
      getData();
    }
  }, [initializingState]);

  return (
    <div>
      <h1>Exercises</h1>
      <pre>
        {JSON.stringify(
          { exerciseList: exerciseList.exercises, initializingState },
          null,
          2
        )}
      </pre>
    </div>
  );
};

export default Exercises;
