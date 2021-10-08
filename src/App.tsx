import { Redirect, Route, Switch } from "react-router-dom";

import { AppDrawer } from "./components";
import { MAIN_PAGES } from "./pages";
import { ContentSection, RootWrapper } from "./Styles";

const App = () => {
  return (
    <RootWrapper>
      <AppDrawer />
      <div>App Header</div>
      <ContentSection>
        <Switch>
          {MAIN_PAGES.map(({ config, Page }) => (
            <Route
              exact
              component={Page}
              key={config.name}
              path={config.path}
            />
          ))}
          <Redirect to="/" />
        </Switch>
      </ContentSection>
      <div>App Footer</div>
    </RootWrapper>
  );
};

export default App;
