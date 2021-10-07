import { useAppDispatch } from "../../hooks";
import { setDrawerContent } from "../../store";

import { CreateNewWorkoutPage } from "..";
import { AppDrawerEnterDirection } from "../../contracts";

const Homepage = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      Homepage
      <button
        onClick={() =>
          dispatch(
            setDrawerContent({
              Element: CreateNewWorkoutPage,
              enterDirection: AppDrawerEnterDirection.bottom,
            })
          )
        }
      >
        Create Workout
      </button>
    </div>
  );
};

export default Homepage;
