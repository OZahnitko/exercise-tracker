import { HomepageFooterHomeIcon, HomepageFooterStatsIcon } from "./components";
import { IconWrapper, Wrapper } from "./Styles";

export const HomepageFooter = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <HomepageFooterHomeIcon />
      </IconWrapper>
      <IconWrapper>
        <HomepageFooterStatsIcon />
      </IconWrapper>
    </Wrapper>
  );
};

export default HomepageFooter;
