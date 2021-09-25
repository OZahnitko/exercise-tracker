import { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface ElementInterface {
  element: HTMLElement;
  callback: () => void;
}

export const useOutsideClickListener = () => {
  const [observedHTMLElements, setObservedHTMLElements] = useState<
    ElementInterface[]
  >([]);

  const handleClick = (e: MouseEvent) => {
    for (const element of observedHTMLElements) {
      if (!e.composedPath().includes(element.element)) {
        setObservedHTMLElements((observedHTMLElements) =>
          observedHTMLElements.filter(
            (innerElement) => innerElement !== element
          )
        );
        element.callback();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  });

  const addElement = (element: HTMLElement, callback?: () => void) => {
    setObservedHTMLElements((observedHTMLElements) => {
      return [
        ...observedHTMLElements,
        {
          element,
          callback: callback
            ? callback
            : () => {
                console.log("ree");
              },
        },
      ];
    });
  };

  const removeElement = (element: HTMLElement) => {};

  return {
    addElement,
    observedHTMLElements,
    removeElement,
  };
};
