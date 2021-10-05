import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateTime } from "luxon";

import { RootState } from "./store";

export interface AppState {
  currentDate: string;
  initializing: boolean;
  searchString: string;
  selectedDate: string | undefined;
}

const initialState: AppState = {
  currentDate: DateTime.now().toISO(),
  initializing: true,
  searchString: "",
  selectedDate: DateTime.now().toISO(),
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedDate: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      selectedDate: payload,
    }),
    setInitializingState: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      initializing: payload,
    }),
  },
});

export const { setSelectedDate, setInitializingState } = appSlice.actions;

export const getCurrentDate = ({ app: { currentDate } }: RootState) =>
  currentDate;

export const getInitializingState = ({ app: { initializing } }: RootState) =>
  initializing;

export const getSelectedDate = ({ app: { selectedDate } }: RootState) =>
  selectedDate;

export default appSlice.reducer;
