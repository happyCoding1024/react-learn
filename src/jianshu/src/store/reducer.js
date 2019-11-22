// import { combineReducers } from 'redux';
// 为了让 state 也是一个 immutable 对象，从 redux-immutable 中引入。
import { combineReducers } from 'redux-immutable';

//////////////////////////说明import后接收的问题/////////////////////////////
// 当 '../common/header/store/reducer' 文件中只export一个函数时，这里用headerReducer
// 接收相当于给这个函数起了一个名字一样，但是像这样写是不行的。
// import { headerReducer } from '../common/header/store/reducer'; 因为这里是利用的是解构赋值
// '../common/header/store/reducer' 导出的数据中并没有 headerReducer 。
//    import headerReducer from '../common/header/store/reducer';
///////////////////////////////////////////////////////////////////////////////

/////////////////在header/store中假如index.js后可以改写成下面这样////////////////
import  { headerReducer }   from '../common/header/store/';
/////////////////////////////////////////////////////////////////////////////

import { reducer as homeReducer } from '../pages/home/store';

import { reducer as detailReducer } from '../pages/detail/store';

import { reducer as loginReducer } from '../pages/login/store';

////////////////////////说明reducer合并的原理/////////////////////////////////
// 为了不使这个reducer文件的代码太多，故分成许多reducer，在这里将reducer进行合并
// 再将最终合并完成的reducer export出去。
// 有一点需要注意，在其它文件中使用store中的数据时，并不直接是 store.数据了，
// 以 要取focused数据为例，现在应该写成store.header.focused.
// 当上面引入的是 redux-immutable 这个模块时，下面这段代码生成的 reducer 就变成了一个immutable对象
// 其实把下面代码中的 reducer 换成 newState 更好理解
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
});
///////////////////////////////////////////////////////////////////////////////

export default reducer; // 这里返回的reducer就是那张redux流程图中的newState