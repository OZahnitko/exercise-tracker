import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface CalendarState {
  showCalendar: boolean;
}

const initialState: CalendarState = {
  showCalendar: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setShowCalendar: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      showCalendar: payload,
    }),
  },
});

export const { setShowCalendar } = uiSlice.actions;

export const getShowCalendar = ({ ui: { showCalendar } }: RootState) =>
  showCalendar;

export default uiSlice.reducer;
