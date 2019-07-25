import React from "react";
import { Route, Switch } from "react-router-dom";
import slots from './slots'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={slots} />
      </Switch>
    );
  }
}

export default App;
