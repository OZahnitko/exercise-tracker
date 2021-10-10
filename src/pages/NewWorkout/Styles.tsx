import styled from "styled-components";

// New Workout Page
export const HeaderWrapper = styled.div`
  align-items: center;

  display: flex;

  justify-content: space-between;

  margin: 20px 20px 0 20px;
`;

export const HeadingControlsContainer = styled.div`
  display: flex;
`;

export const HeadingTextContainer = styled.div``;

export const IconContainer = styled.div`
  align-items: center;

  display: flex;

  margin-right: 12px;

  :last-child {
    margin-right: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  flex-direction: column;

  height: 100%;
`;

// Exercise Area

interface ExerciseAreaChipWrapperProps {
  selected: boolean;
}

export const ExerciseAreaChipWrapper = styled.div<ExerciseAreaChipWrapperProps>`
  background-color: #f8e1d2;
  border: 2px solid #${(props) => (props.selected ? "fa7b34" : "f8e1d2")};
  border-radius: 5px;

  margin-right: 12px;

  padding: 0 12px;

  transition: border 0.25s ease-in-out;

  :last-child {
    margin-right: 0;
  }
`;

export const ExerciseAreaContainer = styled.div`
  display: flex;

  margin: 20px;

  overflow: auto hidden;

  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;

// Exercise List

export const ExerciseListContainer = styled.div`
  align-content: flex-start;
  display: flex;

  flex: 1;
  flex-wrap: wrap;

  gap: 12px;

  overflow: hidden auto;

  padding: 0 20px 20px 20px;
`;

// Exercise Card
interface ExerciseCardWrapperProps {
  selected: boolean;
}

export const ExerciseCardWrapper = styled.div<ExerciseCardWrapperProps>`
  align-items: center;

  background: #ddf2ff;
  border: 2px solid #${(props) => (props.selected ? "fa7b34" : "ddf2ff")};
  border-radius: 5px;

  color: #${(props) => (props.selected ? "fa7b34" : "12bef6")};

  display: flex;

  font-weight: bold;

  height: ${() => (window.innerWidth - 64) / 3}px;

  justify-content: center;

  padding: 12px;

  text-align: center;

  width: ${() => (window.innerWidth - 64) / 3}px;
`;

// New Workout Editor
export const NewWorkoutEditorWrapper = styled.div`
  border: 1px solid red;

  flex: 1;

  margin-top: 20px;

  overflow: hidden auto;

  padding: 0 20px 20px 20px;
`;
