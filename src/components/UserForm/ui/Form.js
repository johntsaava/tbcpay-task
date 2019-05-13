import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import BackIcon from "@material-ui/icons/KeyboardBackspace";
import MaterialTypography from "@material-ui/core/Typography";

import Input from "../../fields/Input";
import DateInput from "../../fields/DateInput";
import Select from "../../fields/Select";

import data from "../../../data.json";

const StyledForm = styled.form`
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

const Form = ({ onChange, onSubmit, values, errors, buttonText, title }) => (
  <StyledForm onSubmit={onSubmit}>
    <BackLink to="/">
      <Fab color="primary" aria-label="Back">
        <BackIcon />
      </Fab>
    </BackLink>

    <Typography variant="h2">{title}</Typography>

    <Input
      name="firstName"
      id="firstName"
      inputProps={{
        id: "firstName"
      }}
      label="First name"
      values={values}
      errors={errors}
      onChange={onChange}
    />
    <Input
      name="lastName"
      id="lastName"
      inputProps={{
        id: "lastName"
      }}
      label="Last name"
      values={values}
      errors={errors}
      onChange={onChange}
    />
    <Input
      name="idNumber"
      id="idNumber"
      inputProps={{
        maxLength: 11,
        id: "idNumber"
      }}
      type="tel"
      label="ID number"
      values={values}
      errors={errors}
      onChange={onChange}
    />
    <Select
      name="gender"
      label="Gender"
      options={[
        { value: "male", name: "Male" },
        { value: "female", name: "Female" }
      ]}
      values={values}
      errors={errors}
      onChange={onChange}
    />
    <DateInput
      name="birthDate"
      label="Birth date"
      values={values}
      onChange={onChange}
    />
    <Select
      name="birthplace"
      label="Birthplace"
      options={data.cities}
      values={values}
      errors={errors}
      onChange={onChange}
    />
    <Input
      name="address"
      id="address"
      inputProps={{
        id: "address"
      }}
      label="Address"
      values={values}
      errors={errors}
      onChange={onChange}
    />

    <Button variant="contained" color="primary" type="submit">
      {buttonText}
    </Button>
  </StyledForm>
);

export default Form;
