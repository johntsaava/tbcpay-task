import React from "react";
import styled from "styled-components";

import DateInput from "./fields/DateInput";
import Select from "./fields/Select";
import Input from "./fields/Input";

import data from "../data.json";

const Form = styled.form`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > :nth-child(n) {
    margin: 10px 0;
  }
`;

const Pair = styled.div`
  & :first-child {
    margin-right: 10px;
  }
`;

const UserSearch = ({ filters, onChange }) => (
  <Form>
    <Pair>
      <Input
        name="firstName"
        id="firstName"
        inputProps={{
          id: "firstName"
        }}
        label="First name"
        values={filters}
        onChange={onChange}
      />
      <Input
        name="lastName"
        id="lastName"
        inputProps={{
          id: "lastName"
        }}
        label="Last name"
        values={filters}
        onChange={onChange}
      />
    </Pair>

    <Input
      name="idNumber"
      id="idNumber"
      inputProps={{
        maxLength: 11,
        id: "idNumber"
      }}
      type="tel"
      label="ID number"
      values={filters}
      onChange={onChange}
    />

    <Select
      name="gender"
      label="Gender"
      options={[
        { value: "male", name: "Male" },
        { value: "female", name: "Female" }
      ]}
      values={filters}
      onChange={onChange}
    />

    <Select
      name="birthplace"
      label="Birthplace"
      options={data.cities}
      values={filters}
      onChange={onChange}
    />

    <Input
      name="address"
      id="address"
      inputProps={{
        id: "address"
      }}
      label="Address"
      values={filters}
      onChange={onChange}
    />

    <Pair>
      <DateInput
        name="birthDateFrom"
        label="Birth date (From)"
        values={filters}
        onChange={onChange}
      />
      <DateInput
        name="birthDateTo"
        label="Birth date (To)"
        values={filters}
        onChange={onChange}
      />
    </Pair>
  </Form>
);

export default UserSearch;
