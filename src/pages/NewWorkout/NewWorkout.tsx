import { Dispatch, SetStateAction, useEffect, useState } from "react";

import {
  ArrowIcon,
  ArrowIconDirection,
  ChevronIcon,
  CircleCheckIcon,
  CrossIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "../../components";
import { CrossIconTypes } from "../../components/Icons/CrossIcon/CrossIcon";
import { Status } from "../../components/Icons/TrashIcon/TrashIcon";
import type { Exercise } from "../../contracts";
import { useUIHooks, useWorkoutHooks } from "../../hooks";
import {
  ControlsContainer,
  ExerciseAreaChipWrapper,
  ExerciseAreaContainer,
  ExerciseCardWrapper,
  ExerciseListContainer,
  ExpandedControls,
  HeaderWrapper,
  HeadingControlsContainer,
  HeadingTextContainer,
  IconContainer,
  InformationContainer,
  NewWorkoutEditorWrapper,
  PermanentContainer,
  ResistanceExerciseControlsContainer,
  ResistanceExerciseControlsWrapper,
  RowContainer,
  SelectedExerciseCardWrapper,
  Wrapper,
} from "./Styles";
import { fetchExercises, reduceUniqueAreasOfEffect } from "../../utility";

const NewWorkout = () => {
  const [stepOne, setStepOne] = useState<boolean>(true);
  const [stepTwo, setStepTwo] = useState<boolean>(false);

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [exerciseAreas, setExerciseAreas] = useState<string[]>([]);
  const [selectedExerciseArea, setSelectedExerciseArea] = useState<
    string | undefined
  >(undefined);

  const { closeDrawer } = useUIHooks();
  const { clearSelectedExercises, selectedExercises } = useWorkoutHooks();

  const handleFetchExercises = async () => {
    const exercises = await fetchExercises();

    setExercises(() => exercises);
  };

  useEffect(() => {
    handleFetchExercises();
  }, []);

  useEffect(() => {
    if (exercises.length)
      setExerciseAreas(() => reduceUniqueAreasOfEffect(exercises));
  }, [exercises]);

  useEffect(() => {
    if (exerciseAreas.length) setSelectedExerciseArea(() => exerciseAreas[0]);
  }, [exerciseAreas]);

  useEffect(() => {
    if (!selectedExercises.length) setStepOne(() => true);
  }, [selectedExercises]);

  useEffect(() => {
    if (stepOne) setStepTwo(() => false);
  }, [stepOne]);

  useEffect(() => {
    if (stepTwo) setStepOne(() => false);
  }, [stepTwo]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeadingTextContainer>
          <h3>
            {stepOne ? "Pick Workout Exercises" : "Edit Selected Exercises"}
          </h3>
        </HeadingTextContainer>
        <HeadingControlsContainer>
          {selectedExercises.length ? (
            <>
              {stepOne ? (
                <IconContainer onClick={clearSelectedExercises}>
                  <TrashIcon status={Status.active} />
                </IconContainer>
              ) : (
                <IconContainer>
                  <CircleCheckIcon />
                </IconContainer>
              )}
              <IconContainer
                onClick={
                  stepOne
                    ? () => setStepTwo(() => true)
                    : () => setStepOne(() => true)
                }
              >
                <ArrowIcon
                  direction={
                    stepOne ? ArrowIconDirection.right : ArrowIconDirection.left
                  }
                />
              </IconContainer>
            </>
          ) : (
            <IconContainer onClick={closeDrawer}>
              <CrossIcon type={CrossIconTypes.urgent} />
            </IconContainer>
          )}
        </HeadingControlsContainer>
      </HeaderWrapper>
      {stepOne && (
        <>
          <ExerciseAreaContainer>
            {exerciseAreas.map((area) => (
              <ExerciseAreaChip
                area={area}
                included={reduceUniqueAreasOfEffect(selectedExercises).includes(
                  area
                )}
                key={area}
                onSelect={setSelectedExerciseArea}
                selected={selectedExerciseArea === area}
              />
            ))}
          </ExerciseAreaContainer>
          <ExerciseListContainer>
            {exercises
              .filter((exercise) =>
                exercise.aoe.includes(selectedExerciseArea!)
              )
              .map((exercise) => (
                <ExerciseCard
                  key={exercise.name}
                  exercise={exercise}
                  selected={
                    !!selectedExercises.find(
                      (selectedExercise) =>
                        selectedExercise.name === exercise.name
                    )
                  }
                />
              ))}
          </ExerciseListContainer>
        </>
      )}
      {stepTwo && <NewWorkoutEditor />}
    </Wrapper>
  );
};

export default NewWorkout;

interface ExerciseAreaChipProps {
  area: string;
  included: boolean;
  onSelect: Dispatch<SetStateAction<string | undefined>>;
  selected: boolean;
}

export const ExerciseAreaChip = ({
  area,
  included,
  onSelect,
  selected,
}: ExerciseAreaChipProps) => {
  return (
    <ExerciseAreaChipWrapper
      included={included}
      onClick={() => onSelect(() => area)}
      selected={selected}
    >
      <h3>{area}</h3>
    </ExerciseAreaChipWrapper>
  );
};

interface ExerciseCardProps {
  exercise: Exercise;
  selected: boolean;
}

export const ExerciseCard = ({ exercise, selected }: ExerciseCardProps) => {
  const { addSelectedExercise, removeSelectedExercise } = useWorkoutHooks();

  return (
    <ExerciseCardWrapper
      onClick={() =>
        selected
          ? removeSelectedExercise(exercise)
          : addSelectedExercise(exercise)
      }
      selected={selected}
    >
      {exercise.name}
    </ExerciseCardWrapper>
  );
};

const NewWorkoutEditor = () => {
  const [expandedChild, setExpandedChild] = useState<string | null>(null);

  const { selectedExercises } = useWorkoutHooks();

  const handleChildExpand = (exerciseName: string) => {
    if (expandedChild !== exerciseName) setExpandedChild(() => exerciseName);
  };

  return (
    <NewWorkoutEditorWrapper>
      {selectedExercises.map((exercise) => (
        <SelectedExerciseCard
          exercise={exercise}
          expandedChild={expandedChild}
          key={exercise.name}
          onExpand={handleChildExpand}
        />
      ))}
    </NewWorkoutEditorWrapper>
  );
};

interface SelectedExerciseCardProps {
  exercise: Exercise;
  expandedChild: string | null;
  onExpand: (exerciseName: string) => void;
}

interface ExerciseProps {
  weight: number;
  reps: number;
  sets: number;
}

export const SelectedExerciseCard = ({
  exercise,
  expandedChild,
  onExpand,
}: SelectedExerciseCardProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [exerciseProps, setExerciseProps] = useState<ExerciseProps>({
    weight: exercise.defaultValues.weight,
    reps: 6,
    sets: 3,
  });

  const { removeSelectedExercise } = useWorkoutHooks();

  const handleExercisePropChange = (key: string, value: number) =>
    setExerciseProps((exerciseProps) => ({ ...exerciseProps, [key]: value }));

  useEffect(() => {
    if (expanded) onExpand(exercise.name);
  }, [expanded]);

  useEffect(() => {
    if (expandedChild !== exercise.name) setExpanded(() => false);
  }, [expandedChild]);

  return (
    <SelectedExerciseCardWrapper>
      <PermanentContainer>
        <InformationContainer>
          <h3>{exercise.name}</h3>
        </InformationContainer>
        <ControlsContainer>
          <IconContainer onClick={() => setExpanded((expanded) => !expanded)}>
            <ChevronIcon rotated={expanded} />
          </IconContainer>
          {expanded ? (
            <IconContainer onClick={() => setExpanded(() => false)}>
              <CircleCheckIcon />
            </IconContainer>
          ) : (
            <IconContainer onClick={() => removeSelectedExercise(exercise)}>
              <CrossIcon />
            </IconContainer>
          )}
        </ControlsContainer>
      </PermanentContainer>
      {expanded ? (
        <ExpandedControls>
          {exercise.type.includes("resistance") ? (
            <ResistanceExerciseControls
              exerciseProps={exerciseProps}
              onChange={handleExercisePropChange}
            />
          ) : (
            <h1>Other controls will come later.</h1>
          )}
        </ExpandedControls>
      ) : null}
    </SelectedExerciseCardWrapper>
  );
};

interface ResistanceExerciseControlsProps {
  exerciseProps: ExerciseProps;
  onChange: (key: string, value: number) => void;
}

export const ResistanceExerciseControls = ({
  exerciseProps,
  onChange,
}: ResistanceExerciseControlsProps) => {
  return (
    <ResistanceExerciseControlsWrapper>
      <RowContainer>
        <div>Weight</div>
        <ResistanceExerciseControlsContainer>
          <IconContainer
            onClick={() => onChange("weight", exerciseProps.weight - 1)}
          >
            <MinusCircleIcon />
          </IconContainer>
          <IconContainer>
            <h3>{exerciseProps.weight}</h3>
          </IconContainer>
          <IconContainer
            onClick={() => onChange("weight", exerciseProps.weight + 1)}
          >
            <PlusCircleIcon />
          </IconContainer>
        </ResistanceExerciseControlsContainer>
      </RowContainer>
      <RowContainer>
        <div>Reps</div>
        <ResistanceExerciseControlsContainer>
          <IconContainer
            onClick={() => onChange("reps", exerciseProps.reps - 1)}
          >
            <MinusCircleIcon />
          </IconContainer>
          <IconContainer>
            <h3>{exerciseProps.reps}</h3>
          </IconContainer>
          <IconContainer
            onClick={() => onChange("reps", exerciseProps.reps + 1)}
          >
            <PlusCircleIcon />
          </IconContainer>
        </ResistanceExerciseControlsContainer>
      </RowContainer>
      <RowContainer>
        <div>Sets</div>
        <ResistanceExerciseControlsContainer>
          <IconContainer
            onClick={() => onChange("sets", exerciseProps.sets - 1)}
          >
            <MinusCircleIcon />
          </IconContainer>
          <IconContainer>
            <h3>{exerciseProps.sets}</h3>
          </IconContainer>
          <IconContainer
            onClick={() => onChange("sets", exerciseProps.sets + 1)}
          >
            <PlusCircleIcon />
          </IconContainer>
        </ResistanceExerciseControlsContainer>
      </RowContainer>
    </ResistanceExerciseControlsWrapper>
  );
};
