import styled from "styled-components";

export const CalendarWrapper = styled.div`
  background: white;

  display: flex;

  justify-content: center;

  position: absolute;

  top: ${(props) => (props.hidden ? -100 : 0)}%;
  transition: top 0.25s linear;

  width: 100%;
`;
