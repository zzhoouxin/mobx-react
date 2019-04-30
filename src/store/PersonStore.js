import { observable, computed, action } from "mobx";

class PersonStore {
  @observable name = "张三";
}

export default PersonStore;