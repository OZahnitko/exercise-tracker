import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface UIState {
  showBottomDrawer: boolean;
  showSidebar: boolean;
}

const initialState: UIState = {
  showBottomDrawer: false,
  showSidebar: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
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

export const { setShowBottomDrawer, setShowSidebar } = uiSlice.actions;

export const getShowBottomDrawer = ({ ui: { showBottomDrawer } }: RootState) =>
  showBottomDrawer;

export const getShowSidebar = ({ ui: { showSidebar } }: RootState) =>
  showSidebar;

export default uiSlice.reducer;
