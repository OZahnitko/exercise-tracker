import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateTime } from "luxon";

import type { AppState } from "../contracts";
import { RootState } from "./store";

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
    setInitializingState: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      initializing: payload,
    }),
    setSearchString: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      searchString: payload,
    }),
    setSelectedDate: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      selectedDate: payload,
    }),
  },
});

export const { setSelectedDate, setInitializingState, setSearchString } =
  appSlice.actions;

export const getCurrentDate = ({ app: { currentDate } }: RootState) =>
  currentDate;

export const getInitializingState = ({ app: { initializing } }: RootState) =>
  initializing;

export const getSearchString = ({ app: { searchString } }: RootState) =>
  searchString;

export const getSelectedDate = ({ app: { selectedDate } }: RootState) =>
  selectedDate;

export default appSlice.reducer;
