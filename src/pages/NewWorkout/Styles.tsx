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

  justify-content: center;

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
  included: boolean;
  selected: boolean;
}

export const ExerciseAreaChipWrapper = styled.div<ExerciseAreaChipWrapperProps>`
  background-color: #f8e1d2;
  border: 2px solid #${(props) => (props.selected ? "fa7b34" : props.included ? "00a600" : "f8e1d2")};
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
  flex: 1;

  overflow: hidden auto;

  margin: 12px 20px 20px 20px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

// Selected Exercise Card

export const ControlsContainer = styled.div`
  display: flex;
`;

export const ExpandedControls = styled.div`
  font-weight: bold;

  margin-top: 12px;
`;

export const InformationContainer = styled.div`
  border: 1px solid blue;
`;

export const PermanentContainer = styled.div`
  align-items: center;

  display: flex;

  justify-content: space-between;
`;

export const SelectedExerciseCardWrapper = styled.div`
  background-color: #ddf2ff;
  border-radius: 15px;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  margin-bottom: 12px;

  padding: 12px;

  :last-child {
    margin-bottom: 0;
  }
`;

// Resistance Exercise Controls

export const ResistanceExerciseControlsContainer = styled.div`
  align-items: center;

  display: flex;

  justify-content: space-between;
`;

export const ResistanceExerciseControlsWrapper = styled.div``;

export const RowContainer = styled.div`
  align-items: center;

  display: flex;

  justify-content: space-between;
`;
