import { FC } from "react";

import {
  BarbellIcon,
  CheckIcon,
  ChevronDownIcon,
  CrossIcon,
} from "../../../../../Icons";
import { HeadingWrapper, IconWrapper, Wrapper } from "./Styles";

interface SelectedExerciseCardProps {
  exerciseName: string;
}

const SelectedExerciseCard: FC<SelectedExerciseCardProps> = ({
  exerciseName,
}) => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <IconWrapper>
          <BarbellIcon />
        </IconWrapper>
        {exerciseName}
        <CheckIcon />
        <ChevronDownIcon />
        <CrossIcon />
      </HeadingWrapper>
    </Wrapper>
  );
};

export default SelectedExerciseCard;
