import React, { useContext, useState, useEffect } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";

import { userInputSchema } from "../../helpers";
import context from "../../context";
import UserForm from "../UserForm";

const User = ({ match, history }) => {
  const { state, dispatch } = useContext(context);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (state.users) {
      const user = state.users.find(user => user.id === match.params.id);
      if (user) setUser(user);
    }
  }, [match.params, state.users]);

  if (!user)
    return (
      <p>
        User not found. <Link to="/">Back</Link>
      </p>
    );

  return (
    <Formik
      initialValues={{
        firstName: user.firstName,
        lastName: user.lastName,
        idNumber: user.idNumber,
        gender: user.gender,
        birthDate: user.birthDate,
        birthplace: user.birthplace,
        address: user.address
      }}
      validationSchema={userInputSchema}
      enableReinitialize={true}
      onSubmit={(values, { setErrors }) => {
        if (
          user.idNumber !== String(values.idNumber) &&
          state.users.find(user => user.idNumber === String(values.idNumber))
        ) {
          setErrors({ idNumber: "Already exists" });
        } else {
          dispatch({
            type: "EDIT_USER",
            payload: {
              ...values,
              idNumber: String(values.idNumber),
              id: user.id
            }
          });
          history.push("/");
        }
      }}
    >
      {() => <UserForm title="Edit user" buttonText="Edit" />}
    </Formik>
  );
};

export default User;
