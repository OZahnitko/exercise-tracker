import { useCallback, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { getObservedElements, removeObservedElement } from ".";

import type { AppDispatch, RootState } from ".";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useOutsideClickListener = () => {
  const dispatch = useAppDispatch();
  const observedHtmlElements = useAppSelector(getObservedElements);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      for (const element of observedHtmlElements) {
        if (!e.composedPath().includes(element.element)) {
          dispatch(removeObservedElement(element));
          element.callback();
        }
      }
    },
    [observedHtmlElements]
  );

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  });
};
