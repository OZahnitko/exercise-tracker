import { MenuIcon } from "..";
import { setShowSidebar, useAppDispatch } from "../../store";
import {
  AvatarWrapper,
  IconWrapper,
  OuterIconWrapper,
  UserNameWrapper,
  Wrapper,
} from "./Styles";

const AppHeader = () => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <OuterIconWrapper>
        <IconWrapper onClick={() => dispatch(setShowSidebar(true))}>
          <MenuIcon />
        </IconWrapper>
      </OuterIconWrapper>
      <UserNameWrapper>Hello, Sasha</UserNameWrapper>
      <AvatarWrapper>
        <h2>S</h2>
      </AvatarWrapper>
    </Wrapper>
  );
};

export default AppHeader;
