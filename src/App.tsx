import LuxonUtils from "@date-io/luxon";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Button, TextField } from "@material-ui/core";
import { DateTime } from "luxon";
import { useEffect } from "react";

import { getCurrentDate, getSelectedDate, setSelectedDate } from "./appSlice";
import { useAppSelector, useAppDispatch } from "./store";
import { RootWrapper, TextFieldWrapper } from "./Styles";
import { checkLocalStorage } from "./utility";

const App = () => {
  const currentDate = useAppSelector(getCurrentDate);
  const selectedDate = useAppSelector(getSelectedDate);

  const dispatch = useAppDispatch();

  const checkLocal = async () => {
    try {
      await checkLocalStorage();
    } catch (err) {
      console.log("There was an error");
      console.log(err);
    }
  };

  useEffect(() => {
    checkLocal();
  }, []);

  return (
    <RootWrapper>
      <TextFieldWrapper>
        <TextField fullWidth multiline variant="outlined" minRows={10} />
      </TextFieldWrapper>
      <Button
        color="primary"
        onClick={() => {
          dispatch(setSelectedDate(DateTime.now().toISO()));
        }}
        variant="contained"
      >
        Set Selected Date to Today
      </Button>

      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <div style={{ border: "2px solid red" }}>
          <DatePicker
            autoOk
            orientation="portrait"
            variant="static"
            openTo="date"
            value={selectedDate}
            onChange={(date) => dispatch(setSelectedDate(date!.toISO()))}
          />
        </div>
      </MuiPickersUtilsProvider>
      <pre>{JSON.stringify({ currentDate, selectedDate }, null, 2)}</pre>
    </RootWrapper>
  );
};

export default App;
