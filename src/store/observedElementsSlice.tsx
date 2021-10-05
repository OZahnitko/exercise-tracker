import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface ObservedUIElement {
  element: HTMLElement;
  callback: () => void;
}

interface ObservedElementState {
  observedHtmlElements: ObservedUIElement[];
}

const initialState: ObservedElementState = {
  observedHtmlElements: [],
};

export const observedElementsSlice = createSlice({
  name: "observedElements",
  initialState,
  reducers: {
    addObservedElement: (state, { payload }) => {
      return {
        ...state,
        observedHtmlElements: [payload, ...state.observedHtmlElements],
      };
    },
    removeObservedElement: (
      state,
      { payload: { element: payloadElement } }
    ) => {
      return {
        ...state,
        observedHtmlElements: state.observedHtmlElements.filter(
          ({ element }) => element !== payloadElement
        ),
      };
    },
  },
});

export const { addObservedElement, removeObservedElement } =
  observedElementsSlice.actions;

export const getObservedElements = ({
  observedElements: { observedHtmlElements },
}: RootState) => observedHtmlElements;

export default observedElementsSlice.reducer;
