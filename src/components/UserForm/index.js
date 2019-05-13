import React, { useState, useContext } from "react";

import context from "../../context";
import { validateUserInputs } from "../../helpers";
import Form from "./ui/Form";

const UserForm = ({ title, buttonText, initialValues = null, onSubmit }) => {
  const { state } = useContext(context);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(null);

  const onChange = (name, value) => {
    if (name === "idNumber" && !/^\d*$/.test(value)) return;
    setErrors({ ...errors, [name]: null });
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const inputErrors = validateUserInputs(values);
    if (inputErrors) {
      setErrors(inputErrors);
      return;
    }

    if (
      state.users.find(
        user => user.idNumber === values.idNumber && user.id !== values.id
      )
    ) {
      setErrors({ idNumber: "Already exists" });
      return;
    }

    onSubmit(values);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      onChange={onChange}
      values={values}
      errors={errors}
      title={title}
      buttonText={buttonText}
    />
  );
};

export default UserForm;
