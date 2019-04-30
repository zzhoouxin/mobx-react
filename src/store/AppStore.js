import { observable, computed, action } from "mobx";

class AppStore {
  @observable number = 3333;

  @action modifyNumber(number) {
    this.number = number;
  }

  @action addNumber(number) {
    this.number += 1;
  }

  @action lessNumber(number) {
    this.number -= 1;
  }
}

export default AppStore;
