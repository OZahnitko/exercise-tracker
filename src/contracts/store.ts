export interface AppState {
  currentDate: string;
  initializing: boolean;
  searchString: string;
  selectedDate: string | undefined;
}

export interface UIState {
  drawer: DrawerState;
}

export interface DrawerState {
  callback: (() => void) | undefined;
  Content: (() => JSX.Element) | undefined;
  direction: AppDrawerDirection | undefined;
  open: boolean;
}

export enum AppDrawerDirection {
  top = "top",
  right = "right",
  bottom = "bottom",
  left = "left",
}
