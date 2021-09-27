import { useEffect, useRef } from "react";

import { Wrapper } from "./Styles";

import {
  addObservedElement,
  setShowUserPanel,
  useAppDispatch,
} from "../../store";

const UserPanel = () => {
  const dispatch = useAppDispatch();

  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current) {
      dispatch(
        addObservedElement({
          element: wrapperRef.current!,
          callback: () => dispatch(setShowUserPanel(false)),
        })
      );
    }
  }, [wrapperRef]);

  return (
    <Wrapper ref={wrapperRef}>
      <h1>User Panel.</h1>
    </Wrapper>
  );
};

export default UserPanel;
