import { useEffect } from "react";

import { Homepage } from "./components";
import { setInitializingState, useAppDispatch } from "./store";
import { InnerWrapper, RootWrapper } from "./Styles";
import { checkLocalStorage } from "./utility";

const App = () => {
  const dispatch = useAppDispatch();

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
        <Homepage />
      </InnerWrapper>
    </RootWrapper>
  );
};

export default App;
