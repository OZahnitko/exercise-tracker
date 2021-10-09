import styled from "styled-components";

export const ExerciseWrapper = styled.div`
  align-items: center;

  background: #ddf2ff;
  border-radius: 5px;

  color: #12bef6;

  display: flex;

  font-weight: bold;

  height: ${() => (window.innerWidth - 64) / 3}px;

  justify-content: center;

  padding: 12px;

  text-align: center;

  width: ${() => (window.innerWidth - 64) / 3}px;
`;

export const Wrapper = styled.div`
  display: flex;

  flex-wrap: wrap;

  grid-template-columns: auto auto auto;

  column-gap: 12px;
  row-gap: 12px;
`;
