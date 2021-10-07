import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from ".";
import { getObservedHtmlElements, removeObservedHtmlElement } from "../store";

export const useOutsideClickListener = () => {
  const dispatch = useAppDispatch();
  const observedHtmlElements = useAppSelector(getObservedHtmlElements);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (!observedHtmlElements.length) {
        return;
      } else {
        const path = e.composedPath() as HTMLElement[];
        for (let element of observedHtmlElements) {
          if (!path.find((el) => el.dataset?.name === element.name)) {
            dispatch(removeObservedHtmlElement(element));
            element.callback();
          }
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
