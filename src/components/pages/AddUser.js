import React, { useContext } from "react";
import { Formik } from "formik";

import context from "../../context";
import { userInputSchema } from "../../helpers";

import UserForm from "../UserForm";

const AddUser = ({ history }) => {
  const { state, dispatch } = useContext(context);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        idNumber: "",
        gender: "",
        birthDate: new Date().toJSON().slice(0, 10),
        birthplace: "",
        address: ""
      }}
      enableReinitialize={true}
      validationSchema={userInputSchema}
      onSubmit={(values, { setErrors }) => {
        if (
          state.users.find(user => user.idNumber === String(values.idNumber))
        ) {
          setErrors({ idNumber: "Already exists" });
        } else {
          dispatch({
            type: "ADD_USER",
            payload: {
              ...values,
              idNumber: String(values.idNumber),
              id: String(Math.random())
            }
          });
          history.push("/");
        }
      }}
    >
      {() => <UserForm title="Add user" buttonText="Add" />}
    </Formik>
  );
};

export default AddUser;
