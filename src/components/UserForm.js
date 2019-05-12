import React from "react";
import styled from "styled-components";
import { Form as FormikForm, Field } from "formik";
import { Link } from "react-router-dom";

import MaterialTypography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import BackIcon from "@material-ui/icons/KeyboardBackspace";

import Input from "./fields/Input";
import DateInput from "./fields/DateInput";
import Select from "./fields/Select";

import data from "../data.json";

const Form = styled(FormikForm)`
  width: 100%;
  max-width: 500px;
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

const Typography = styled(MaterialTypography)`
  @media (max-width: 600px) {
    text-align: right;
  }
`;

const UserForm = ({ title, buttonText }) => {
  return (
    <Form>
      <BackLink to="/">
        <Fab color="primary" aria-label="Back">
          <BackIcon />
        </Fab>
      </BackLink>

      <Typography variant="h2">{title}</Typography>

      <Field name="firstName" label="First name" component={Input} />
      <Field name="lastName" label="Last name" component={Input} />
      <Field
        type="number"
        name="idNumber"
        label="ID number"
        component={Input}
      />
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
        {buttonText}
      </Button>
    </Form>
  );
};

export default UserForm;
