import LuxonUtils from "@date-io/luxon";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useRef } from "react";

import {
  getSelectedDate,
  setSelectedDate,
  getShowCalendar,
  useAppDispatch,
  useAppSelector,
} from "../../store";

import { CalendarWrapper } from "./Styles";

const Calendar = () => {
  const dispatch = useAppDispatch();
  const selectedDate = useAppSelector(getSelectedDate);
  const showCalendar = useAppSelector(getShowCalendar);

  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <CalendarWrapper showCalendar={!showCalendar} ref={wrapperRef}>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <DatePicker
          autoOk
          onChange={(date) => dispatch(setSelectedDate(date!.toISO()))}
          orientation="portrait"
          openTo="date"
          value={selectedDate}
          variant="static"
          fullWidth
        />
      </MuiPickersUtilsProvider>
    </CalendarWrapper>
  );
};

export default Calendar;
