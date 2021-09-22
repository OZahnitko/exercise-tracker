import { Button, TextField } from "@material-ui/core";
import localforage from "localforage";
import { useState } from "react";

const App = () => {
  const [exercises, setExercises] = useState<string[]>([]);

  return (
    <div className="App">
      <h1>Hello from the other side.</h1>
      <Button
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
      >
        SAVE in local forage
      </Button>

      <Button
        onClick={async () => {
          try {
            const res: string[] | null = await localforage.getItem("exercises");
            setExercises(() => res!);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        GET IT OUT OF THERE
      </Button>
      <div style={{ padding: "20px" }}>
        <TextField fullWidth multiline variant="outlined" />
      </div>
      <pre>{JSON.stringify({ exercises }, null, 2)}</pre>
    </div>
  );
};

export default App;
