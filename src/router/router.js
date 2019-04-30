import React, { Component, Fragment } from "react";
// 引入BrowserRouter
import { HashRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Two from "../page/two";
import One from "../page/one";
import ListView from "../page/test/list-view";

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Route exact path={`/`} component={ListView} />
          <Route path={`/one`} component={One} />
          <Route path={`/two`} component={Two} />
        </Fragment>
      </HashRouter>
    );
  }
}

export default Router;
