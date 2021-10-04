import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: { ui: uiReducer },
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
