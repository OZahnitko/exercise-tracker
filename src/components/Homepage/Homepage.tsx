import { HomepageFooter, HomepageHeader, HomepageSection } from "./components";

import { ContentSection, Wrapper } from "./Styles";

export const Homepage = () => {
  return (
    <Wrapper>
      <HomepageHeader />
      <ContentSection>
        <HomepageSection />
        <HomepageSection />
        <HomepageSection large>
          <h1>Fuck the police</h1>
          <h1>Fuck the police</h1>
          <h1>Fuck the police</h1>
          <h1>Fuck the police</h1>
        </HomepageSection>
        <HomepageSection large>
          <h1>Fuck the police</h1>
          <h1>Fuck the police</h1>
          <h1>Fuck the police</h1>
          <h1>Fuck the police</h1>
        </HomepageSection>
        <HomepageSection large>
          <h1>Fuck the police</h1>
          <h1>Fuck the police</h1>
          <h1>Fuck the police</h1>
          <h1>Fuck the police</h1>
        </HomepageSection>
        <HomepageSection />
        <HomepageSection />
      </ContentSection>
      <HomepageFooter />
    </Wrapper>
  );
};

export default Homepage;
