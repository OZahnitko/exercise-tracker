import { useEffect } from "react";
import { InnerWrapper, RootWrapper } from "./Styles";

import {
  AppFooter,
  AppHeader,
  BottomDrawer,
  Homepage,
  Sidebar,
} from "./components";
import {
  setInitializingState,
  useAppDispatch,
  useOutsideClickListener,
} from "./store";
import { checkLocalStorage } from "./utility";

const App = () => {
  useOutsideClickListener();

  const dispatch = useAppDispatch();

  const checkLocal = async () => {
    await checkLocalStorage();
  };

  useEffect(() => {
    dispatch(setInitializingState(true));

    checkLocal();

    dispatch(setInitializingState(false));
  }, []);

  return (
    <RootWrapper>
      <InnerWrapper>
        <AppHeader />
        <Homepage />
        <AppFooter />
        <Sidebar />
        <BottomDrawer />
      </InnerWrapper>
    </RootWrapper>
  );
};

export default App;
