import { useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";

import {
  addObservedElement,
  getBottomDrawerContent,
  getShowBottomDrawer,
  setBottomDrawerContent,
  setShowBottomDrawer,
  useAppDispatch,
  useAppSelector,
} from "../../store";
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

  const dispatch = useAppDispatch();
  const BottomDrawerContent = useAppSelector(getBottomDrawerContent);
  const showBottomDrawer = useAppSelector(getShowBottomDrawer);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      setHeight(() => wrapperRef.current!.getBoundingClientRect().height);
    }
  }, [wrapperRef]);

  useEffect(() => {
    if (showBottomDrawer) {
      dispatch(
        addObservedElement({
          element: wrapperRef.current!,
          callback: () => {
            dispatch(setBottomDrawerContent(undefined));
          },
        })
      );
    }
  }, [showBottomDrawer]);

  useEffect(() => {
    if (BottomDrawerContent) {
      dispatch(setShowBottomDrawer(true));
    } else {
      dispatch(setShowBottomDrawer(false));
    }
  }, [BottomDrawerContent]);

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
          {BottomDrawerContent ? <BottomDrawerContent /> : "Loading..."}
        </Wrapper>
      )}
    </Transition>
  );
};

export default BottomDrawer;
