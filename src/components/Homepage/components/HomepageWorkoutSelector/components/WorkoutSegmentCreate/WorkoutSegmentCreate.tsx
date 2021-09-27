import {
  setShowCreateWorkoutPanel,
  useAppDispatch,
} from "../../../../../../store";
import { Wrapper } from "./Styles";

const WorkoutSegmentCreate = () => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper onClick={() => dispatch(setShowCreateWorkoutPanel(true))}>
      <h3>+ Create</h3>
      <h3>Workout</h3>
    </Wrapper>
  );
};

export default WorkoutSegmentCreate;
