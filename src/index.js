import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import { Provider } from "mobx-react";
import { configure } from "mobx";

import stores from "./store";
// import Main from "./app";
import Main from "./router/router";
render(
  <div>
    <DevTools />
    <Provider {...stores}>
      <Main />
    </Provider>
  </div>,
  document.getElementById("root")
);

//5.x版本严格模式开启方式
configure({
  enforceActions: "observed"
});
