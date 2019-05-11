import React from "react";

import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

const Input = ({ label, field, form, ...rest }) => {
  let error = false;
  if (form) {
    error = form.errors[field.name];
    return (
      <FormControl>
        <TextField label={label} {...field} error={!!error} {...rest} />
        <FormHelperText>
          {error && error.replace(field.name, `"${label}"`)}
        </FormHelperText>
      </FormControl>
    );
  } else {
    return <TextField label={label} {...field} {...rest} />;
  }
};

export default Input;
