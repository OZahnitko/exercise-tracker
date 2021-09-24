import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface CalendarState {
  showCalendar: boolean;
  selectedHomepageSection: HTMLDivElement | null;
}

const initialState: CalendarState = {
  showCalendar: false,
  selectedHomepageSection: null,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSelectedHomepageSection: (
      state,
      { payload }: PayloadAction<HTMLDivElement>
    ) => ({ ...state, selectedHomepageSection: payload }),
    setShowCalendar: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      showCalendar: payload,
    }),
  },
});

export const { setShowCalendar, setSelectedHomepageSection } = uiSlice.actions;

export const getSelectedHomepageSection = ({
  ui: { selectedHomepageSection },
}: RootState) => selectedHomepageSection;

export const getShowCalendar = ({ ui: { showCalendar } }: RootState) =>
  showCalendar;

export default uiSlice.reducer;
