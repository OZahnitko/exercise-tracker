import { setBottomDrawerContent, useAppDispatch } from "../../store";
import { Wrapper } from "./Styles";

import { PANELS, PanelNames } from "..";

const WorkoutCardCreate = () => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper
      onClick={() => {
        const targetPanel = PANELS.find(
          (panel) => panel.config.name === PanelNames.CreateWorkoutPanel
        )?.Panel;
        dispatch(setBottomDrawerContent(targetPanel));
      }}
    >
      <h3>+ Create</h3>
      <h3>Workout</h3>
    </Wrapper>
  );
};

export default WorkoutCardCreate;
