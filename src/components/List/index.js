import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CircularProgress from "@material-ui/core/CircularProgress";

import Table from "./view/Table";
import Card from "./view/Card";

const Progress = styled(CircularProgress)`
  margin-top: 10%;
`;

const UserList = ({ users, loading }) => {
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

  if (!users || loading) return <Progress />;

  if (windowWidth > 1000) return <Table users={users} />;
  return users.map(user => <Card key={user.id} user={user} />);
};

export default UserList;
