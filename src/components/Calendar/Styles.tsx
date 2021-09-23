import styled from "styled-components";

interface CalendarWrapperProps {
  showCalendar: boolean;
}

export const CalendarWrapper = styled.div<CalendarWrapperProps>`
  box-shadow: ${({ theme }) => theme.shadows.calendarShadow};

  display: flex;

  position: absolute;

  top: ${(props) => (props.showCalendar ? -100 : 0)}%;
  transform: translateZ(0);
  transition: top ${({ theme }) => theme.times.calendarTransition}s linear;

  // Experimenting with hardware acceleration

  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
`;
