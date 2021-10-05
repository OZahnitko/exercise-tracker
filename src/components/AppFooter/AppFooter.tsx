import { HomeIcon, StatsIcon } from "..";
import { IconWrapper, Wrapper } from "./Styles";

const AppFooter = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <HomeIcon />
      </IconWrapper>
      <IconWrapper>
        <StatsIcon />
      </IconWrapper>
    </Wrapper>
  );
};

export default AppFooter;
