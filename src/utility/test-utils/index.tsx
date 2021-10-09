import "@testing-library/jest-dom/extend-expect";

import { FC } from "react";
import { Provider } from "react-redux";
import { render as rtlRender } from "@testing-library/react";

import { store } from "../../store";

const render = (ui: JSX.Element) => {
  const Wrapper: FC = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper });
};

export * from "@testing-library/react";

export { render };
