import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { WorkoutAreaChip } from "..";
import type { Exercise } from "../../contracts";
import { Wrapper } from "./Styles";
import { reduceUniqueAreasOfEffect } from "../../utility";

interface WorkoutAreaPickerProps {
  callback: Dispatch<SetStateAction<string | null>>;
  empty: boolean;
  exercises: Exercise[];
  selectedArea: string | null;
}

const WorkoutAreaPicker = ({
  callback,
  empty,
  exercises,
  selectedArea,
}: WorkoutAreaPickerProps) => {
  const [areasOfEffect, setAreasOfEffect] = useState<string[]>([]);

  useEffect(() => {
    if (exercises.length) {
      const areas = reduceUniqueAreasOfEffect(exercises);
      setAreasOfEffect(() => areas);
    }
  }, [exercises]);

  useEffect(() => {
    if (areasOfEffect.length) {
      callback(areasOfEffect[0]);
    }
  }, [areasOfEffect]);

  return (
    <Wrapper>
      {areasOfEffect.map((area) => (
        <WorkoutAreaChip
          key={area}
          name={area}
          onClick={() => callback(area)}
          selected={selectedArea === area}
        />
      ))}
    </Wrapper>
  );
};

export default WorkoutAreaPicker;
