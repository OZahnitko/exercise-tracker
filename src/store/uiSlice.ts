import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface UIState {
  selectedHomepageSection: HTMLDivElement | null;
  showCalendar: boolean;
  showCreateWorkoutPanel: boolean;
  showUserPanel: boolean;
}

const initialState: UIState = {
  selectedHomepageSection: null,
  showCalendar: false,
  showCreateWorkoutPanel: false,
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
    setShowCreateWorkoutPanel: (
      state,
      { payload }: PayloadAction<boolean>
    ) => ({ ...state, showCreateWorkoutPanel: payload }),
    setShowUserPanel: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      showUserPanel: payload,
    }),
  },
});

export const {
  setSelectedHomepageSection,
  setShowCalendar,
  setShowCreateWorkoutPanel,
  setShowUserPanel,
} = uiSlice.actions;

export const getSelectedHomepageSection = ({
  ui: { selectedHomepageSection },
}: RootState) => selectedHomepageSection;

export const getShowCalendar = ({ ui: { showCalendar } }: RootState) =>
  showCalendar;

export const getShowCreateWorkoutPanel = ({
  ui: { showCreateWorkoutPanel },
}: RootState) => showCreateWorkoutPanel;

export const getShowUserPanel = ({ ui: { showUserPanel } }: RootState) =>
  showUserPanel;

export default uiSlice.reducer;
