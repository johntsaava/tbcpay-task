import React, { useState, useEffect } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import UserListItem from "./UserListItem";

const UserList = ({ users }) => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Table>
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
        {users &&
          users.map(user => (
            <UserListItem user={user} key={user.id} windowWidth={windowWidth} />
          ))}
      </TableBody>
    </Table>
  );
};

export default UserList;
