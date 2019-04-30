import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("listStore")
@observer
export default class One extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>页面二</h1>
        <h3>mobx的参数个数:<span style={{color:"red"}}>{this.props.listStore.listLength}</span></h3>
        <button
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          跳转到mobx测试页面
        </button>
      </div>
    );
  }
}
