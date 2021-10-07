import { Redirect, Route, Switch } from "react-router-dom";

import { AppDrawer, AppFooter, AppHeader } from "./components";
import { useOutsideClickListener } from "./hooks";
import { PAGES } from "./pages";
import { AppContentWrapper, RootWrapper } from "./Styles";

const App = () => {
  useOutsideClickListener();

  return (
    <RootWrapper>
      <AppDrawer.Component />
      <AppHeader />
      <AppContentWrapper>
        <Switch>
          {PAGES.map((page) => (
            <Route
              component={page.Page}
              exact
              key={page.config.name}
              path={page.config.path}
            />
          ))}
          <Redirect to="/" />
        </Switch>
      </AppContentWrapper>
      <AppFooter />
    </RootWrapper>
  );
};

export default App;
