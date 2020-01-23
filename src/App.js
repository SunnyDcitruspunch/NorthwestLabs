import React from "react";
import { Route, Switch } from "react-router-dom";
import { About, Help } from "./Components";
import Welcome from "./Welcome";
import "./App.scss";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/about" component={About} />
      <Route path="/help" component={Help} />
    </Switch>
  );
}

export default App;
