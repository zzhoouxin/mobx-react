import { observable, computed, action, autorun } from "mobx";

export default class ListStore {
  @observable list = [1, 2, 3];

  @computed get listLength() {
    return this.list.length;
  }

  @action addData() {
    this.list.push(Math.random());
  }

  @action lessData() {
    this.list.pop();
  }
}
