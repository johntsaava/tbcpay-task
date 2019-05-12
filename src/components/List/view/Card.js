import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import EditIcon from "@material-ui/icons/Edit";
import MaterialPaper from "@material-ui/core/Paper";

import data from "../../../data.json";

const Paper = styled(MaterialPaper)`
  align-self: stretch;
  margin: 15px;
`;

const Row = styled.div`
  display: flex;
  justify-content: ${props => props.align || "space-between"};
  padding: 15px;
  font-family: "Roboto";
`;

const Cards = ({
  user: {
    id,
    firstName,
    lastName,
    idNumber,
    gender,
    birthDate,
    birthplace,
    address
  }
}) => (
  <Paper>
    <Row align="flex-end">
      <Link to={`edit-user/${id}`}>
        <EditIcon color="secondary" />
      </Link>
    </Row>
    <Row>
      <span>Full Name:</span>
      <span>{`${firstName} ${lastName}`}</span>
    </Row>
    <Row>
      <span>ID number:</span>
      <span>{idNumber}</span>
    </Row>
    <Row>
      <span>Gender:</span>
      <span>{gender === "male" ? "Male" : "Female"}</span>
    </Row>
    <Row>
      <span>Birth date:</span>
      <span>
        {birthDate
          .split("-")
          .reverse()
          .join("/")}
      </span>
    </Row>
    <Row>
      <span>Birthplace:</span>
      <span>{data.cities.find(city => city.value === birthplace).name}</span>
    </Row>
    <Row>
      <span>Address:</span>
      <span>{address}</span>
    </Row>
  </Paper>
);

export default Cards;
