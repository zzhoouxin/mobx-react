import React, { Component } from "react";
import { Route } from "react-router-dom";
import Two from "../page/two";
import One from "../page/one";
import ListView from "../page/test/list-view";

class Intro extends Component {
  render() {
    return (
      <div>
        <Route exact path={`/`} component={ListView} />
        <Route path={`/one`} component={One} />
        <Route path={`/two`} component={Two} />
      </div>
    );
  }
}
export default Intro;
