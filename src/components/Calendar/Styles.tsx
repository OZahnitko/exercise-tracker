import styled from "styled-components";

interface CalendarWrapperProps {
  showCalendar: boolean;
}

export const CalendarWrapper = styled.div<CalendarWrapperProps>`
  background: white;

  display: flex;

  justify-content: center;

  position: absolute;

  top: ${(props) => (props.showCalendar ? -100 : 0)}%;
  transform: translateZ(0);
  transition: top ${(props) => props.theme.times.calendarTransition}s linear;

  width: 100%;

  // Experimenting with hardware acceleration

  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
`;
