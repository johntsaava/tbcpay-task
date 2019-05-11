import React, { useState } from "react";

import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";

const DateInput = ({ field, label }) => {
  const [date, setDate] = useState(new Date(field.value));
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        label={label}
        value={date}
        onChange={value => {
          setDate(value);
          field.onChange(value.toJSON().slice(0, 10));
        }}
        format="dd/MM/yyyy"
        disableFuture={true}
        openToYearSelection={true}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateInput;
