import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";

import type { DrawerState, UIState } from "../contracts";

const initialState: UIState = {
  drawer: {
    callback: undefined,
    Content: undefined,
    direction: undefined,
    open: false,
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    closeDrawer: (state) => ({
      ...state,
      drawer: { ...state.drawer, open: false },
    }),
    setDrawer: (state, { payload }: PayloadAction<DrawerState>) => ({
      ...state,
      drawer: payload,
    }),
  },
});

export const { closeDrawer, setDrawer } = uiSlice.actions;

export const getDrawer = ({ ui: { drawer } }: RootState) => drawer;

export default uiSlice.reducer;
