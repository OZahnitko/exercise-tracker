import { TextField } from "@material-ui/core";
import { useEffect, useState } from "react";

import exerciseData from "./data/exercises.json";
import { RootWrapper, TextFieldWrapper } from "./Styles";
import { fetchExercises, storeExercises } from "./utility";

export interface Exercise {
  name: string;
}

const App = () => {
  const [exercises, setExercises] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  /* Check if exercises exist is local storage */

  const checkLocalStorage = () => {
    return "tes";
  };

  useEffect(() => {
    const fn = async () => {
      storeExercises(exerciseData.exercises.map(({ name }: Exercise) => name));
    };
    fn();
    checkLocalStorage();
    setLoading(() => false);
  }, []);

  useEffect(() => {
    const fn = async () => {
      const allExercises = await fetchExercises();
      setExercises(() => allExercises!);
    };
    if (!loading) {
      fn();
    }
  }, [loading]);

  return (
    <RootWrapper>
      <h1>Hello from the other side.</h1>
      <TextFieldWrapper>
        <TextField fullWidth multiline variant="outlined" minRows={10} />
      </TextFieldWrapper>
      <pre>{JSON.stringify({ exercises, loading }, null, 2)}</pre>
    </RootWrapper>
  );
};

export default App;
