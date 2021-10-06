import { FC, useState } from "react";

import { BarbellIcon, ChevronIcon, CrossIcon } from "..";
import {
  BodyWrapper,
  ControlsWrapper,
  HeaderWrapper,
  HeaderIconWrapper,
  InformationWrapper,
  Wrapper,
} from "./Styles";

export interface Exercise {
  aoe: string[];
  name: string;
}

interface NewWorkoutSelectedExerciseProps {
  exercise: Exercise;
}

const NewWorkoutSelectedExercise: FC<NewWorkoutSelectedExerciseProps> = ({
  exercise: { name },
}) => {
  const [bodyExpanded, setBodyExpanded] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderWrapper>
        <InformationWrapper>
          <HeaderIconWrapper>
            <BarbellIcon />
          </HeaderIconWrapper>
          {name}
        </InformationWrapper>
        <ControlsWrapper>
          <ChevronIcon
            onClick={() => setBodyExpanded((bodyExpanded) => !bodyExpanded)}
            rotated={bodyExpanded}
          />
          <CrossIcon />
        </ControlsWrapper>
      </HeaderWrapper>
      {bodyExpanded && <BodyWrapper>Body</BodyWrapper>}
    </Wrapper>
  );
};

export default NewWorkoutSelectedExercise;
