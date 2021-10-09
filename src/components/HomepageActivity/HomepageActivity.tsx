import { DateTime } from "luxon";
import ReactSwipe from "react-swipe";

import { JoggingIcon } from "..";
import { useAppSelector } from "../../hooks";
import { getSelectedDate } from "../../store";
import {
  ContentWrapper,
  HeadingWrapper,
  IconWrapper,
  InformationWrapper,
  SummaryWrapper,
  Wrapper,
} from "./Styles";

const HomepageActivity = () => {
  const selectedDate = useAppSelector(getSelectedDate);

  return (
    <ReactSwipe
      swipeOptions={{
        continuous: false,
      }}
    >
      <Wrapper>
        <ContentWrapper>
          <InformationWrapper>
            <HeadingWrapper>
              Activity for{" "}
              {DateTime.fromISO(selectedDate).toLocaleString({
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
    </ReactSwipe>
  );
};

export default HomepageActivity;
