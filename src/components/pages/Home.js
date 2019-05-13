import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import context from "../../context";
import { filterUsers } from "../../helpers";

import List from "../List";
import UserSearch from "../UserSearch";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  const { state } = useContext(context);
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    gender: "",
    birthDateFrom: new Date("1900-01-01").toJSON().slice(0, 10),
    birthDateTo: new Date().toJSON().slice(0, 10),
    birthplace: "",
    address: ""
  });
  const [visibleUsers, setVisibleUsers] = useState(null);

  useEffect(() => {
    if (state.users) setVisibleUsers(filterUsers(filters, state.users));
  }, [state.users, filters]);

  const onChange = (filter, value) => {
    if (filter === "idNumber" && !/^\d*$/.test(value)) return;
    setFilters(state => ({ ...state, [filter]: value }));
  };

  return (
    <Container>
      <UserSearch filters={filters} onChange={onChange} />

      <Link to="/add-user">
        <Fab color="primary" aria-label="Add">
          <AddIcon />
        </Fab>
      </Link>

      <List users={visibleUsers} />
    </Container>
  );
};

export default Home;
