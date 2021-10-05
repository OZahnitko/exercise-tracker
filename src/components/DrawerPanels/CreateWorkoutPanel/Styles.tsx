import styled from "styled-components";

export interface ExerciseAreaChipWrapperProps {
  selected: boolean;
}

export const ExerciseAreaChipWrapper = styled.div<ExerciseAreaChipWrapperProps>`
  background-color: #f8e1d2;
  border: 2px solid #${(props) => (props.selected ? "fa7b34" : "f8e1d2")};
  border-radius: 5px;

  color: #fa7b34;

  font-size: 15.71px;
  font-weight: bold;

  padding: 9px 10px;

  transition: border-color 0.2s ease-in-out;

  white-space: nowrap;
`;

export const ExerciseAreaPickerWrapper = styled.div`
  display: flex;

  overflow: auto hidden;

  & :not(:first-child) {
    margin-left: 10px;
  }
`;

export interface ExerciseChipWrapperProps {
  height: number;
}

export const ExerciseChipWrapper = styled.div<ExerciseChipWrapperProps>`
  align-items: center;

  background: #ddf2ff;
  border-radius: 5px;

  color: #12bef6;

  display: flex;

  font-size: 15.72px;
  font-weight: bold;

  height: ${(props) => props.height}px;

  justify-content: center;

  text-align: center;

  padding: 10px;
`;

export interface ExerciseListWrapperProps {
  isEmpty: boolean;
  chipSize: number;
}

export const ExerciseListWrapper = styled.div<ExerciseListWrapperProps>`
  display: grid;

  gap: 10px;
  grid-template-columns: repeat(3, ${(props) => props.chipSize}px);

  margin-top: ${(props) => (props.isEmpty ? 0 : 20)}px;
`;

export const ExercisePickerWrapper = styled.div`
  display: flex;

  flex-direction: column;

  margin-top: 20px;

  width: 100%;
`;

export const HeadingWrapper = styled.div`
  text-align: center;
`;

export const Wrapper = styled.div``;
