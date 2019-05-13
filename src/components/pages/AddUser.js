import React, { useContext } from "react";

import UserForm from "../UserForm";

import context from "../../context";

const AddUser = ({ history }) => {
  const { dispatch } = useContext(context);

  const onSubmit = values => {
    dispatch({
      type: "ADD_USER",
      payload: {
        ...values,
        id: String(Math.random()).slice(2)
      }
    });
    history.push("/");
  };

  return (
    <UserForm
      title="Add user"
      buttonText="Add"
      onSubmit={onSubmit}
      initialValues={{
        firstName: "",
        lastName: "",
        idNumber: "",
        gender: "",
        birthDate: new Date().toJSON().slice(0, 10),
        birthplace: "",
        address: ""
      }}
    />
  );
};

export default AddUser;
