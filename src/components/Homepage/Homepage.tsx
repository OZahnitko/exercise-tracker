import {
  HomepageFooter,
  HomepageHeader,
  HomepageSearch,
  HomepageTodaysActivity,
  HomepageWorkoutSelector,
} from "./components";
import { ContentSection, Wrapper } from "./Styles";

export const Homepage = () => {
  return (
    <Wrapper>
      <HomepageHeader />
      <ContentSection>
        <HomepageSearch />
        <HomepageTodaysActivity />
        <HomepageWorkoutSelector />
      </ContentSection>
      <HomepageFooter />
    </Wrapper>
  );
};

export default Homepage;
