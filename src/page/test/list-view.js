import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("listStore")
@observer
class ListView extends Component {
  constructor(props) {
    super(props);
    console.log("props==>", this.props.listStore);
  }

  render() {
    return (
      <div>
        <div>mobx 数组有几个参数:<span  style={{color:"red"}}>{this.props.listStore.listLength}</span></div>
        {this.props.listStore.list.map(data => {
          return <div key={data}>{data}</div>;
        })}
        <button
          onClick={() => {
            this.props.listStore.addData();
          }}
        >
          点击添加
        </button>
        <button
          onClick={() => {
            this.props.listStore.lessData();
          }}
        >
          点击删除
        </button>
        <button
          onClick={() => {
            this.props.history.push("/one");
          }}
        >
          页面1
        </button>
        <button
          onClick={() => {
            this.props.history.push("/two");
          }}
        >
          页面2
        </button>
      </div>
    );
  }

}
export default ListView;
