// 这个文件的作用是减少引入header中的reducer文件时的路径长度。
// 不仅仅是上面说的那个作用，我们希望store中所有需要导出的东西都由这个文件导出。

import headerReducer from './reducer';
import * as actionCreators from './actionCreators';
import * as constants from './constants';

export { headerReducer, actionCreators, constants};
