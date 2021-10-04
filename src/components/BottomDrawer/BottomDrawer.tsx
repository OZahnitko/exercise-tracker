import { useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";

import { getShowBottomDrawer, useAppSelector } from "../../store";
import { Wrapper } from "./Styles";
import { theme } from "../../theme";

const transitionStyles = {
  entering: { bottom: 0, opacity: 1 },
  entered: { bottom: 0, opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: {},
};

const BottomDrawer = () => {
  const [height, setHeight] = useState<number | undefined>(undefined);

  const showBottomDrawer = useAppSelector(getShowBottomDrawer);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      setHeight(() => wrapperRef.current!.getBoundingClientRect().height);
    }
  }, [wrapperRef]);

  return (
    <Transition
      in={showBottomDrawer}
      timeout={theme.times.drawerTransitionDuration}
    >
      {(state) => (
        <Wrapper
          elementHeight={height}
          ref={wrapperRef}
          style={{ ...transitionStyles[state] }}
        >
          <div>Bottom Drawer</div>
        </Wrapper>
      )}
    </Transition>
  );
};

export default BottomDrawer;
