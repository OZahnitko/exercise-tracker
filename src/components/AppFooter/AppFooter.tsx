import { IconWrapper, Wrapper } from "./Styles";

import { HomeIcon, StatsIcon } from "..";

const AppFooter = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <HomeIcon />
      </IconWrapper>
      <IconWrapper>
        <StatsIcon />
      </IconWrapper>
      <IconWrapper></IconWrapper>
      <IconWrapper />
    </Wrapper>
  );
};

export default AppFooter;
