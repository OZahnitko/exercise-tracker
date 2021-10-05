import { HomepageSearch, TodayActivityCard, HomepageWorkoutSelector } from "..";
import { Wrapper } from "./Styles";

const Homepage = () => {
  return (
    <Wrapper>
      <HomepageSearch />
      <TodayActivityCard />
      <HomepageWorkoutSelector />
    </Wrapper>
  );
};

export default Homepage;
