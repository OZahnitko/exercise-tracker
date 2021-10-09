import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { AppDrawer } from "./components";
import { useAppDispatch } from "./hooks";
import { MAIN_PAGES } from "./pages";
import { setInitializingState } from "./store";
import { ContentSection, RootWrapper } from "./Styles";
import { checkLocalStorage } from "./utility";

const App = () => {
  const dispatch = useAppDispatch();

  const checkLocal = async () => {
    await checkLocalStorage();
  };

  useEffect(() => {
    dispatch(setInitializingState(true));

    checkLocal();

    dispatch(setInitializingState(false));
  }, []);

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
