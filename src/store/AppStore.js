import { observable, computed, action } from "mobx";

class AppStore {
  @observable number = 3333;
}

export default AppStore;