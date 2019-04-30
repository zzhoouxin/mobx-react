import PersonStore from "./PersonStore";
import AppStore from "./AppStore";
import ListStore from "./ListStore";

const appStore = new AppStore();
const personStore = new PersonStore();
const listStore = new ListStore();

const stores = {
  appStore,
  personStore,
  listStore
};
/// 默认导出接口
export default stores;
