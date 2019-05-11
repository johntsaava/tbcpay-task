import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";
import CssBaseline from "@material-ui/core/CssBaseline";

import Home from "./pages/Home.js";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/AddUser";
import notFound from "./pages/notFound";

import context from "../context";
import reducer from "../reducer";
import data from "../data.json";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: blue,
    secondary: grey
  }
});

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    users: null
  });

  useEffect(() => {
    dispatch({ type: "RECEIEVE_USERS", payload: data.users });
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <context.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/edit-user/:id" component={EditUser} />
            <Route exact path="/add-user" component={AddUser} />
            <Route component={notFound} />
          </Switch>
        </BrowserRouter>
      </context.Provider>
      <CssBaseline />
    </MuiThemeProvider>
  );
};

export default App;
