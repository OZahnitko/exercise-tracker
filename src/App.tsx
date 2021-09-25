import { useEffect } from "react";

import { Homepage, UserPanel } from "./components";
import {
  getShowUserPanel,
  setInitializingState,
  useAppDispatch,
  useAppSelector,
} from "./store";
import { InnerWrapper, RootWrapper } from "./Styles";
import { checkLocalStorage } from "./utility";

const App = () => {
  const dispatch = useAppDispatch();
  const showUserPanel = useAppSelector(getShowUserPanel);

  const checkLocal = async () => {
    dispatch(setInitializingState(true));

    await checkLocalStorage();

    dispatch(setInitializingState(false));
  };

  useEffect(() => {
    checkLocal();
  }, []);

  return (
    <RootWrapper>
      <InnerWrapper>
        {showUserPanel && <UserPanel />}
        <Homepage />
      </InnerWrapper>
    </RootWrapper>
  );
};

export default App;
