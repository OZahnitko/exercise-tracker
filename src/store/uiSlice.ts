import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";

interface UIState {
  activeAreaWidth: number | undefined;
  bottomDrawerContent: (() => JSX.Element) | undefined;
  showBottomDrawer: boolean;
  showSidebar: boolean;
}

const initialState: UIState = {
  activeAreaWidth: undefined,
  showBottomDrawer: false,
  bottomDrawerContent: undefined,
  showSidebar: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setBottomDrawerContent: (
      state,
      { payload }: PayloadAction<(() => JSX.Element) | undefined>
    ) => ({
      ...state,
      bottomDrawerContent: payload,
    }),
    setShowBottomDrawer: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      showBottomDrawer: payload,
    }),
    setShowSidebar: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      showSidebar: payload,
    }),
  },
});

export const { setBottomDrawerContent, setShowBottomDrawer, setShowSidebar } =
  uiSlice.actions;

export const getBottomDrawerContent = ({
  ui: { bottomDrawerContent },
}: RootState) => bottomDrawerContent;

export const getShowBottomDrawer = ({ ui: { showBottomDrawer } }: RootState) =>
  showBottomDrawer;

export const getShowSidebar = ({ ui: { showSidebar } }: RootState) =>
  showSidebar;

export default uiSlice.reducer;
