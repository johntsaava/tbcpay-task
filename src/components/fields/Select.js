import React from "react";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Mselect from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

const Select = ({ label, field, form, options = [] }) => {
  let error = false;
  if (form) error = form.errors[field.name];
  return (
    <FormControl style={{ minWidth: 125 }} error={!!error}>
      <InputLabel>{label}</InputLabel>
      <Mselect {...field}>
        <MenuItem value={""}>
          <em>None</em>
        </MenuItem>
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Mselect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
