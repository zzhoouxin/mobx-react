import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("listStore")
@inject("appStore")
@observer
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>
          自己store 数组有几个参数:
          <span style={{ color: "red" }}>
            {this.props.listStore.listLength}
          </span>
        </p>
        <p>
          其他store里面的数据:
          <span style={{ color: "blue" }}>{this.props.appStore.number}</span>
        </p>
      </div>
    );
  }
}
