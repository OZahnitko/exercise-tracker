import styled from "styled-components";

export const AreaPickerWrapper = styled.div`
  margin: 0 20px 20px 20px;
`;

interface DynamicWrapperProps {
  staticWrapperHeight: number;
}

interface ExerciseListWrapperProps extends DynamicWrapperProps {
  empty: boolean;
}

export const ExerciseListWrapper = styled.div<ExerciseListWrapperProps>`
  overflow: hidden auto;

  margin: ${(props) => (props.empty ? "0" : "0 20px 20px 20px")};

  max-height: ${(props) =>
    (window.innerHeight - props.staticWrapperHeight) / 2.2}px;
`;

export const HeadingIconWrapper = styled.div`
  align-items: center;

  display: flex;

  justify-content: center;
`;

export const HeadingWrapper = styled.div`
  align-items: center;

  display: flex;

  justify-content: space-between;

  margin: 20px;
`;

export const SelectedExercisesWrapper = styled.div<DynamicWrapperProps>`
  box-shadow: 0 -0.25px 8.25px 0 rgba(0, 0, 0, 0.5);

  max-height: ${(props) =>
    (window.innerHeight - props.staticWrapperHeight) / 2.2}px;

  overflow: hidden auto;

  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;

  flex-direction: column;

  height: 100%;
`;
