import styled from "styled-components";

interface CalendarWrapperProps {
  showCalendar: boolean;
}

export const CalendarWrapper = styled.div<CalendarWrapperProps>`
  background: white;

  display: flex;

  justify-content: center;

  position: absolute;

  top: ${(props) => (props.showCalendar ? -100 : 0)}px;
  transition: top 0.25s linear;

  width: 100%;
`;
