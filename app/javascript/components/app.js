import React from "react";
import { Route, Switch } from "react-router-dom";
import slots from './slots'
import interviews from "./interviews";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={slots} />
        <Route exact path="/interviews" component={interviews} />
      </Switch>
    );
  }
}

export default App;
