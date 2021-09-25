import { setShowUserPanel, useAppDispatch } from "../../../../store";
import {
  AvatarWrapper,
  IconWrapper,
  OuterIconWrapper,
  UserNameWrapper,
  Wrapper,
} from "./Styles";

export const HomepageHeader = () => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <OuterIconWrapper>
        <IconWrapper onClick={() => console.log("yeet")}>
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 13.005C0 13.555 0.446 14 0.995 14H9.005C9.26889 14 9.52197 13.8952 9.70857 13.7086C9.89517 13.522 10 13.2689 10 13.005C10 12.7411 9.89517 12.488 9.70857 12.3014C9.52197 12.1148 9.26889 12.01 9.005 12.01H0.995C0.731109 12.01 0.478028 12.1148 0.291429 12.3014C0.10483 12.488 0 12.7411 0 13.005Z"
              fill="#2B2B2B"
            />
            <path
              d="M0 7C0 7.55 0.446 7.995 0.995 7.995H19.005C19.2689 7.995 19.522 7.89017 19.7086 7.70357C19.8952 7.51697 20 7.26389 20 7C20 6.7361 19.8952 6.48302 19.7086 6.29642C19.522 6.10983 19.2689 6.005 19.005 6.005H0.995C0.731109 6.005 0.478028 6.10983 0.291429 6.29642C0.10483 6.48302 0 6.7361 0 7Z"
              fill="#2B2B2B"
            />
            <path
              d="M1.42143 2C1.04444 2 0.682896 1.89464 0.416327 1.70711C0.149757 1.51957 0 1.26522 0 1C0 0.734784 0.149757 0.48043 0.416327 0.292894C0.682896 0.105358 1.04444 0 1.42143 0H18.5786C18.9556 0 19.3171 0.105358 19.5837 0.292894C19.8502 0.48043 20 0.734784 20 1C20 1.26522 19.8502 1.51957 19.5837 1.70711C19.3171 1.89464 18.9556 2 18.5786 2H1.42143Z"
              fill="#2B2B2B"
            />
          </svg>
        </IconWrapper>
      </OuterIconWrapper>
      <UserNameWrapper>Hello, Sasha</UserNameWrapper>
      <AvatarWrapper
        onClick={() => {
          dispatch(setShowUserPanel(true));
        }}
      >
        <h2>S</h2>
      </AvatarWrapper>
    </Wrapper>
  );
};

export default HomepageHeader;
