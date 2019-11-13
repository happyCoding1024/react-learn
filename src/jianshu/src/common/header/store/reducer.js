import * as constants from './constants';
import { fromJS } from 'immutable';

// 为了不使store中的reducer代码量过大，在这里将header部分的reducer单独
// 放在这里，在store中的reducer.js中进行合并。
const defaultState = fromJS({ // fromJS(JS对象)将一个JS对象转换为immutable对象
  focused: false,
  list: [],
  page: 1, // page:当前页数 现在是有多少推荐数据就显示多少，想实现一次只显示10个，点击换一批显示另外10个
  totalPage: 1 // totalPage: 总页数
});

export default (state=defaultState, action) => {
  // 使用 switch 优化 if 语句
  // 使用 switch 语句时一般在每个case后面都要加上一个break，这里为什么没有这样做呢？
  // 因为这里每个case下面都是return语句，后面也不会再执行了。
  switch(action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.CHANGE_LIST:
      return state.set('list', action.data).set('totalPage', action.totalPage);
    default:
      return state;
  }

  // if (action.type === constants.SEARCH_FOCUS) {
  //   // immutable 对象的set方法，会结合之前immutable对象的值和现在要设置的值
  //   // 返回一个全新的immutable对象，并没有改变原始的immutable对象。
  //   return state.set('focused', true);
  // }
  // if (action.type === constants.SEARCH_BLUR) {
  //   // immutable 对象的set方法，会结合之前immutable对象的值和现在要设置的值
  //   // 返回一个全新的immutable对象，并没有改变原始的immutable对象。
  //   return state.set('focused', false);
  // }
  // if (action.type === constants.CHANGE_LIST) {
  //   // immutable 对象的set方法，会结合之前immutable对象的值和现在要设置的值
  //   // 返回一个全新的immutable对象，并没有改变原始的immutable对象。
  //   return state.set('list', action.data);
  // }

};