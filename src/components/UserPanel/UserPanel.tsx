import { useEffect, useRef } from "react";

import {
  useOutsideClickListener,
  useAppDispatch,
  setShowUserPanel,
} from "../../store";

const UserPanel = () => {
  const dispatch = useAppDispatch();

  const { addElement } = useOutsideClickListener();

  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current!;

    addElement(wrapper, () => dispatch(setShowUserPanel(false)));
  }, []);

  return (
    <div ref={wrapperRef}>
      <h1>User Panel</h1>
    </div>
  );
};

export default UserPanel;
