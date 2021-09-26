import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import appReducer from "./appSlice";
import exercisesReducer from "./exercisesSlice";
import observedElementsReducer from "./observedElementsSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    exercises: exercisesReducer,
    observedElements: observedElementsReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
