// Store states
export interface AppState {
  currentDate: string;
  initializing: boolean;
  searchString: string;
  selectedDate: string | undefined;
}

export interface UIState {
  activeAreaWidth: number | undefined;
  drawerContent: DrawerContent | undefined | null;
  observedHtmlElements: ObservedHtmlElement[];
  showDrawer: boolean;
}

export interface ObservedHtmlElement {
  callback: () => void;
  name: string;
}

export interface DrawerContent {
  Element: () => JSX.Element;
  enterDirection: AppDrawerEnterDirection | undefined;
}

export enum AppDrawerEnterDirection {
  top,
  bottom,
  left,
}
