import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";

function App() {
  return (
    <>
      <Router>
        <Switch basename="/homework-18">
          <Route exact path="/login" render={() => <Redirect to="/login" />}/>
          <Route path="/login" component={SignIn} />
          <Route path="/register" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
