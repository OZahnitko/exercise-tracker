import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";
import type { DrawerContent, ObservedHtmlElement, UIState } from "../contracts";

const initialState: UIState = {
  activeAreaWidth: undefined,
  drawerContent: null,
  observedHtmlElements: [],
  showDrawer: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    addObservedHtmlElement: (
      state,
      { payload }: PayloadAction<ObservedHtmlElement>
    ) => ({
      ...state,
      observedHtmlElements: [...state.observedHtmlElements, payload],
    }),
    removeObservedHtmlElement: (
      state,
      { payload }: PayloadAction<ObservedHtmlElement>
    ) => ({
      ...state,
      observedHtmlElements: state.observedHtmlElements.filter(
        (element) => element.name !== payload.name
      ),
    }),
    setActiveAreaWidth: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      activeAreaWidth: payload,
    }),
    setDrawerContent: (
      state,
      { payload }: PayloadAction<DrawerContent | null>
    ) => ({ ...state, drawerContent: payload }),
  },
});

export const {
  addObservedHtmlElement,
  setActiveAreaWidth,
  removeObservedHtmlElement,
  setDrawerContent,
} = uiSlice.actions;

export const getActiveAreaWidth = ({ ui: { activeAreaWidth } }: RootState) =>
  activeAreaWidth;

export const getDrawerContent = ({ ui: { drawerContent } }: RootState) =>
  drawerContent;

export const getObservedHtmlElements = ({
  ui: { observedHtmlElements },
}: RootState) => observedHtmlElements;

export default uiSlice.reducer;
