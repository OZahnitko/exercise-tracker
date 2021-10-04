import { Transition } from "react-transition-group";

import {
  getShowSidebar,
  setShowSidebar,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { Wrapper } from "./Styles";
import { theme } from "../../theme";

const transitionStyles = {
  entering: { left: "0%", opacity: 1 },
  entered: { left: "0%", opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: {},
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const showSidebar = useAppSelector(getShowSidebar);

  return (
    <Transition in={showSidebar} timeout={theme.times.drawerTransitionDuration}>
      {(state) => (
        <Wrapper style={{ ...transitionStyles[state] }}>
          <h1>Sidebar</h1>
          <button onClick={() => dispatch(setShowSidebar(false))}>Hide</button>
        </Wrapper>
      )}
    </Transition>
  );
};

export default Sidebar;
