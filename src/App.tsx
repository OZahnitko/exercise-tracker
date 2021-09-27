import { useEffect } from "react";

import { CreateWorkoutPanel, Homepage, UserPanel } from "./components";
import {
  getShowCreateWorkoutPanel,
  getShowUserPanel,
  setInitializingState,
  useAppDispatch,
  useAppSelector,
  useOutsideClickListener,
} from "./store";
import { InnerWrapper, RootWrapper } from "./Styles";
import { checkLocalStorage } from "./utility";

const App = () => {
  const dispatch = useAppDispatch();
  const showCreateWorkoutPanel = useAppSelector(getShowCreateWorkoutPanel);
  const showUserPanel = useAppSelector(getShowUserPanel);

  useOutsideClickListener();

  const checkLocal = async () => {
    dispatch(setInitializingState(true));

    await checkLocalStorage();

    dispatch(setInitializingState(false));
  };

  useEffect(() => {
    checkLocal();
  }, []);

  return (
    <>
      <RootWrapper>
        <InnerWrapper>
          {showUserPanel && <UserPanel />}
          {showCreateWorkoutPanel && <CreateWorkoutPanel />}
          <Homepage />
        </InnerWrapper>
      </RootWrapper>
    </>
  );
};

export default App;
