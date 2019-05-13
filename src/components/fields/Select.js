import React from "react";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Mselect from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

const Select = ({
  label,
  name,
  values,
  errors = {},
  onChange,
  options = []
}) => {
  const value = values[name];
  const error = errors && errors[name];
  return (
    <FormControl style={{ minWidth: 125 }} error={Boolean(error)}>
      <InputLabel>{label}</InputLabel>
      <Mselect value={value} onChange={e => onChange(name, e.target.value)}>
        <MenuItem value={""}>
          <em>None</em>
        </MenuItem>
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Mselect>
      {error && (
        <FormHelperText>{error.replace(name, `"${label}"`)}</FormHelperText>
      )}
    </FormControl>
  );
};

export default Select;
