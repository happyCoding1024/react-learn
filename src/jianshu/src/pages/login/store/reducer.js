import { fromJS } from 'immutable';
import { constants } from './'

const defaultState = fromJS({
  login: false // 判断用户是否登录，默认没有登录
});

export default (state=defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value);
    case constants.LOGOUT:
      console.log('123');
      return state.set('login', action.value);
    default:
      return state;
  }
}
