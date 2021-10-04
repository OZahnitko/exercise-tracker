import { InnerWrapper, RootWrapper } from "./Styles";

import { AppHeader, BottomDrawer, Homepage, Sidebar } from "./components";

const App = () => {
  return (
    <RootWrapper>
      <InnerWrapper>
        <AppHeader />
        <Homepage />
        <Sidebar />
        <BottomDrawer />
      </InnerWrapper>
    </RootWrapper>
  );
};

export default App;
