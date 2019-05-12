import React from "react";
import styled from "styled-components";

import DateInput from "./fields/DateInput";
import Select from "./fields/Select";
import TextField from "@material-ui/core/TextField";

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

const UserSearch = ({ filters, onChange }) => {
  const field = name => ({
    value: filters[name],
    onChange(e) {
      onChange(name, e.target.value);
    }
  });

  return (
    <Form>
      <Pair>
        <TextField label="First name" {...field("firstName")} />
        <TextField label="Last name" {...field("lastName")} />
      </Pair>

      <TextField type="number" label="ID number" {...field("idNumber")} />

      <Select
        label="Gender"
        options={[
          { value: "male", name: "Male" },
          { value: "female", name: "Female" }
        ]}
        field={field("gender")}
      />

      <Select
        label="Birthplace"
        options={data.cities}
        field={field("birthplace")}
      />

      <TextField label="Address" {...field("address")} />

      <Pair>
        <DateInput
          label="Birth date (From)"
          field={{
            value: filters["birthDateFrom"],
            onChange(value) {
              onChange("birthDateFrom", value);
            }
          }}
        />
        <DateInput
          label="Birth date (To)"
          field={{
            value: filters["birthDateTo"],
            onChange(value) {
              onChange("birthDateTo", value);
            }
          }}
        />
      </Pair>
    </Form>
  );
};

export default UserSearch;
