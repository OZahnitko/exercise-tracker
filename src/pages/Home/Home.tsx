import {
  HomepageActivity,
  HomepageSearch,
  HomepageWorkoutSelector,
} from "../../components";
import { Wrapper } from "./Styles";

const Home = () => {
  return (
    <Wrapper>
      <HomepageSearch />
      <HomepageActivity />
      <HomepageWorkoutSelector />
    </Wrapper>
  );
};

export default Home;
