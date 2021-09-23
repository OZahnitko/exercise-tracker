import { Button, TextField } from "@material-ui/core";
import { useEffect } from "react";

import { Calendar, Exercises } from "./components";
import {
  getCurrentDate,
  getSelectedDate,
  getShowCalendar,
  setShowCalendar,
  setInitializingState,
  useAppSelector,
  useAppDispatch,
} from "./store";
import { RootWrapper, TextFieldWrapper } from "./Styles";
import { checkLocalStorage } from "./utility";

const App = () => {
  const currentDate = useAppSelector(getCurrentDate);
  const selectedDate = useAppSelector(getSelectedDate);
  const showCalendar = useAppSelector(getShowCalendar);

  const dispatch = useAppDispatch();

  const checkLocal = async () => {
    dispatch(setInitializingState(true));
    try {
      await checkLocalStorage();
    } catch (err) {
      console.log(err);
    }
    dispatch(setInitializingState(false));
  };

  useEffect(() => {
    checkLocal();
  }, []);

  return (
    <RootWrapper>
      <TextFieldWrapper>
        <TextField fullWidth multiline variant="outlined" minRows={10} />
      </TextFieldWrapper>
      <Calendar />
      <pre>{JSON.stringify({ currentDate, selectedDate }, null, 2)}</pre>
      <Exercises />
      <Button
        color="primary"
        onClick={() => dispatch(setShowCalendar(!showCalendar))}
        variant="contained"
      >
        {showCalendar ? "HIDE" : "SHOW"} CALENDAR
      </Button>
    </RootWrapper>
  );
};

export default App;
