import {
  HomepageFooter,
  HomepageHeader,
  HomepageTodaysActivity,
  HomepageWorkoutSelector,
} from "./components";

import { ContentSection, Wrapper } from "./Styles";

export const Homepage = () => {
  return (
    <Wrapper>
      <HomepageHeader />
      <ContentSection>
        <HomepageTodaysActivity />
        <HomepageWorkoutSelector />
      </ContentSection>
      <HomepageFooter />
    </Wrapper>
  );
};

export default Homepage;
