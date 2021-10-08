import { DateTime } from "luxon";

import { JoggingIcon } from "..";
import { useAppSelector } from "../../hooks";
import { getCurrentDate } from "../../store";
import {
  ContentWrapper,
  HeadingWrapper,
  IconWrapper,
  InformationWrapper,
  SummaryWrapper,
  Wrapper,
} from "./Styles";

const HomepageActivity = () => {
  const currentDate = useAppSelector(getCurrentDate);

  return (
    <Wrapper>
      <ContentWrapper>
        <InformationWrapper>
          <HeadingWrapper>
            Activity for{" "}
            {DateTime.fromISO(currentDate).toLocaleString({
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </HeadingWrapper>
          <SummaryWrapper>No Activity for Today</SummaryWrapper>
        </InformationWrapper>
        <IconWrapper>
          <JoggingIcon />
        </IconWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HomepageActivity;
