import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import appReducer from "./appSlice";
import exercisesReducer from "./exercisesSlice";

export const store = configureStore({
  reducer: { app: appReducer, exercises: exercisesReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
