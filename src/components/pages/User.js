import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form as FormikForm, Field } from "formik";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import BackIcon from "@material-ui/icons/KeyboardBackspace";

import Input from "../fields/Input";
import DateInput from "../fields/DateInput";
import Select from "../fields/Select";

import data from "../../data.json";
import context from "../../context";

const Form = styled(FormikForm)`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  & > :nth-child(n) {
    margin-bottom: 20px;
  }
  & > :last-child {
    margin-bottom: 0;
  }
`;

const BackLink = styled(Link)`
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: 1;
`;

const User = ({ match, history }) => {
  const { state, dispatch } = useContext(context);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (state.users && match.params.id) {
      const user = state.users.find(user => user.id === match.params.id);
      if (user) setUser(user);
    }
  }, [match.params, state.users]);

  return (
    <Formik
      initialValues={
        user || {
          firstName: "",
          lastName: "",
          idNumber: "",
          gender: 0,
          birthDate: new Date().toJSON().slice(0, 10),
          birthplace: 0,
          address: ""
        }
      }
      enableReinitialize={true}
      onSubmit={values => {
        if (user) {
          dispatch({
            type: "EDIT_USER",
            payload: { ...values, id: user.id }
          });
        } else {
          dispatch({
            type: "ADD_USER",
            payload: { ...values, id: Math.random().toString() }
          });
        }

        history.push("/");
      }}
    >
      {() => (
        <Form>
          <BackLink to="/">
            <Fab color="primary" aria-label="Back">
              <BackIcon />
            </Fab>
          </BackLink>

          <Typography variant="h2">
            {user ? "Edit user" : "New user"}
          </Typography>

          <Field name="firstName" label="First name" component={Input} />
          <Field name="lastName" label="Last name" component={Input} />
          <Field name="idNumber" label="ID number" component={Input} />
          <Field
            name="gender"
            label="Gender"
            options={[
              { value: "male", name: "Male" },
              { value: "female", name: "Female" }
            ]}
            component={Select}
          />
          <Field name="birthDate" label="Birth date" component={DateInput} />
          <Field
            name="birthplace"
            label="Birthplace"
            options={data.cities}
            component={Select}
          />
          <Field name="address" label="Address" component={Input} />

          <Button variant="contained" color="primary" type="submit">
            {user ? "Edit" : "Create"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default User;
