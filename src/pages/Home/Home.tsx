import { HomepageActivity, HomepageSearch } from "../../components";
import { Wrapper } from "./Styles";

const Home = () => {
  return (
    <Wrapper>
      <HomepageSearch />
      <HomepageActivity />
    </Wrapper>
  );
};

export default Home;
