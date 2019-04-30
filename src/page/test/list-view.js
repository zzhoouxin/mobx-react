import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";
import ShowDataNum from "./components/showDataNum";

@inject("listStore")
@inject("appStore")
@observer
class ListView extends Component {
  constructor(props) {
    super(props);
    console.log("props==>", this.props.listStore);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.appStore.modifyNumber(100000);
    }, 1000);
  }

  render() {
    return (
      <div>
        <ShowDataNum />
        {this.renderList()}
        {this.renderMyselfOperation()}
        {this.pageJump()}
        {this.operationOtherData()}
      </div>
    );
  }

  renderList = () => {
    return (
      <Fragment>
        {this.props.listStore.list.map(data => {
          return <div key={data}>{data}</div>;
        })}
      </Fragment>
    );
  };

  /**
   * 操作自己的模块
   */
  renderMyselfOperation = () => {
    return (
      <div>
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
      </div>
    );
  };
  /**
   * 页面跳转
   */
  pageJump = () => {
    return (
      <div>
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
  };
  /**
   * 操作其他store
   */
  operationOtherData = () => {
    return (
      <div>
        <button
          onClick={() => {
            this.props.appStore.addNumber();
          }}
        >
          操作其他store的值+1
        </button>
        <button
          onClick={() => {
            this.props.appStore.lessNumber();
          }}
        >
          操作其他store的值-1
        </button>
      </div>
    );
  };
}
export default ListView;
