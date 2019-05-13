import React, { useState } from "react";

import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";

const DateInput = ({ name, values, label, onChange }) => {
  const value = values[name];
  const [date, setDate] = useState(new Date(value));
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        label={label}
        value={date}
        onChange={d => {
          setDate(d);
          onChange(name, d.toJSON().slice(0, 10));
        }}
        format="dd/MM/yyyy"
        disableFuture={true}
        openToYearSelection={true}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateInput;
