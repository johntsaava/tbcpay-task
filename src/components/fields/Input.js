import React from "react";

import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

const Input = ({ name, values, errors, onChange, ...rest }) => {
  const value = values[name];
  const error = errors && errors[name];
  return (
    <FormControl>
      <TextField
        value={value}
        error={Boolean(error)}
        onChange={e => onChange(name, e.target.value)}
        {...rest}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Input;
