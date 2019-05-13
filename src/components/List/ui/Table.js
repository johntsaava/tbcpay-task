import React from "react";

import MaterialTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import TableItem from "./TableItem";

const Table = ({ users }) => (
  <MaterialTable>
    <TableHead>
      <TableRow>
        <TableCell>Full Name</TableCell>
        <TableCell align="right">ID number</TableCell>
        <TableCell align="right">Gender</TableCell>
        <TableCell align="right">Birth date</TableCell>
        <TableCell align="right">Birthplace</TableCell>
        <TableCell align="right">Address</TableCell>
        <TableCell align="right">Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {users.map(user => (
        <TableItem user={user} key={user.id} />
      ))}
    </TableBody>
  </MaterialTable>
);

export default Table;
