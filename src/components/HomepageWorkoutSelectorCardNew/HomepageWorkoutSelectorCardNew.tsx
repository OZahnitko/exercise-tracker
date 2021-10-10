import { AppDrawerDirection } from "../../contracts";
import { useAppDispatch } from "../../hooks";
import { closeDrawer, setDrawer } from "../../store";
import { HeadingContainer, Wrapper } from "./Styles";

import { NewWorkout } from "../../pages";

const HomepageWorkoutSelectorCardNew = () => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper
      onClick={() => {
        dispatch(
          setDrawer({
            callback: () => dispatch(closeDrawer()),
            Content: NewWorkout,
            direction: AppDrawerDirection.bottom,
            open: true,
          })
        );
      }}
    >
      <HeadingContainer>
        <h3>New</h3>
      </HeadingContainer>
    </Wrapper>
  );
};

export default HomepageWorkoutSelectorCardNew;
