import React from "react";
import { Link } from "react-router-dom";

import EditIcon from "@material-ui/icons/Edit";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import data from "../../../data.json";

const ListItem = ({
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
}) => {
  return (
    <TableRow>
      <TableCell>{`${firstName} ${lastName}`}</TableCell>
      <TableCell align="right">{idNumber}</TableCell>
      <TableCell align="right">
        {gender === "male" ? "Male" : "Female"}
      </TableCell>
      <TableCell align="right">
        {birthDate
          .split("-")
          .reverse()
          .join("/")}
      </TableCell>
      <TableCell align="right">
        {data.cities.find(city => city.value === birthplace).name}
      </TableCell>
      <TableCell align="right">{address}</TableCell>
      <TableCell align="right">
        <Link to={`edit-user/${id}`}>
          <EditIcon color="secondary" />
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default ListItem;
