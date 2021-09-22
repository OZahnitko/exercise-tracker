import { Button, TextField } from "@material-ui/core";
import localforage from "localforage";
import { useState } from "react";

import { RootWrapper } from "./Styles";

const App = () => {
  const [exercises, setExercises] = useState<string[]>([]);

  return (
    <RootWrapper>
      <h1>Hello from the other side.</h1>
      <Button
        color="secondary"
        onClick={async () => {
          try {
            await localforage.setItem("exercises", [
              "dead lift",
              "bench press",
              "squat",
            ]);
          } catch (err) {
            console.log(err);
          }
        }}
        variant="contained"
      >
        SAVE in local forage
      </Button>

      <Button
        color="primary"
        onClick={async () => {
          try {
            const res: string[] | null = await localforage.getItem("exercises");
            setExercises(() => res!);
          } catch (err) {
            console.log(err);
          }
        }}
        variant="contained"
      >
        GET IT OUT OF THERE
      </Button>
      <div style={{ padding: "20px" }}>
        <TextField fullWidth multiline variant="outlined" />
      </div>
      <pre>{JSON.stringify({ exercises }, null, 2)}</pre>
    </RootWrapper>
  );
};

export default App;
