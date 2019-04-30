import AppStore from "./AppStore";
import ListStore from "./ListStore";

const appStore = new AppStore();
const listStore = new ListStore();

const stores = {
  appStore,
  listStore
};
/// 默认导出接口
export default stores;
