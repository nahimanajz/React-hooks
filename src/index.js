import  store from "./reduxComponents/store";
import  { bugAdded, bugResolved }  from "./reduxComponents/actionsCreator";

store.dispatch(bugAdded('Buuug One'));
store.dispatch(bugResolved(1));


console.log(store.getState());
