import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

//////////////////////////////////////////
// 这样创建store是无法使用这个redux开发工具的。
//const store = createStore(reducer);
/////////////////////////////////////////

///////这样写能使用redux开发工具///////////
// 如果window有__REDUS_DEVTOOLS_EXTENSION_COMPOSE这个扩展工具就将它赋给composeEnhancers(使用它)，chrome浏览器的redux插件就可以用了。
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk))); // 使用thunk中间件

export default store;