import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import UserForm from "../UserForm";

import context from "../../context";

const User = ({ match, history }) => {
  const { state, dispatch } = useContext(context);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (state.users) {
      const user = state.users.find(user => user.id === match.params.id);
      if (user) setUser(user);
    }
  }, [match.params, state.users]);

  if (!user)
    return (
      <p>
        User not found. <Link to="/">Back</Link>
      </p>
    );

  return (
    <UserForm
      title="Edit user"
      buttonText="Edit"
      initialValues={user}
      onSubmit={values => {
        dispatch({ type: "EDIT_USER", payload: values });
        history.push("/");
      }}
    />
  );
};

export default User;
