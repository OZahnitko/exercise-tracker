import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface CalendarState {
  selectedHomepageSection: HTMLDivElement | null;
  showCalendar: boolean;
  showUserPanel: boolean;
}

const initialState: CalendarState = {
  selectedHomepageSection: null,
  showCalendar: false,
  showUserPanel: false,
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
    setShowUserPanel: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      showUserPanel: payload,
    }),
  },
});

export const { setSelectedHomepageSection, setShowUserPanel, setShowCalendar } =
  uiSlice.actions;

export const getSelectedHomepageSection = ({
  ui: { selectedHomepageSection },
}: RootState) => selectedHomepageSection;

export const getShowCalendar = ({ ui: { showCalendar } }: RootState) =>
  showCalendar;

export const getShowUserPanel = ({ ui: { showUserPanel } }: RootState) =>
  showUserPanel;

export default uiSlice.reducer;
