import localforage from "localforage";

const App = () => (
  <div className="App">
    <h1>Hello from the other side.</h1>
    <button
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
    </button>

    <button
      onClick={async () => {
        try {
          const exercises = await localforage.getItem("exercises");
          console.log(exercises);
        } catch (err) {
          console.log(err);
        }
      }}
    >
      GET IT OUT OF THERE
    </button>
  </div>
);

export default App;
