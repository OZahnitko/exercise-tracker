import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateTime } from "luxon";

import { AppState } from "./contracts";
import { RootState } from "./store";

const initialState: AppState = {
  currentDate: DateTime.now().toISO(),
  selectedDate: DateTime.now().toISO(),
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string>) => ({
      ...state,
      selectedDate: action.payload,
    }),
  },
});

export const { setSelectedDate } = appSlice.actions;

export const getCurrentDate = ({ app: { currentDate } }: RootState) =>
  currentDate;

export const getSelectedDate = ({ app: { selectedDate } }: RootState) =>
  selectedDate;

export default appSlice.reducer;
