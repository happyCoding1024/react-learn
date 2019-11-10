import { takeEvery,put } from 'redux-saga/effects';
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreators";
import axios from 'axios';
import store from "./index";

function* getInitList() {

  ////////////////////////////////////////////////////
  // axios.get('/list.json').then((res) => {
  //   // const data = res.data;
  //   // const action = initListAction(data);
  //   //  // 不利用 store 也可以利用 saga 的 put 方法来实现调用reducer中的函数
  //   //  put(action);
  // 但是上面这样写是不行的，需要写成 generator 函数的形式

  // store.dispatch(action); // 这个地方也可以用store，结果就是对的。
  // });
  ///////////////////////////////////////////////////////////////

  const res = yield axios.get('./list.json'); // 等数据接收完毕之后再执行下面的代码
  const action = initListAction(res.data);
  yield put(action); // 等这个action处理完成之后再执行下面的代码，这句代码相当于
  // yield store.dispatch(action); 但是在saga中建议使用上面的put语法
}

function* todoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList) //takeEvery 的第一个参数表示action的类型，第二个参数表示当捕获到这个类型时要执行的函数
}

export default todoSagas;