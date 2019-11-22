import axios from 'axios';
import * as constants from './constants'

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
});

// 发送用户名和密码到服务器验证是否用户名，密码正确
export const login = (account, password) => {
  return (dispatch) => {
    // 注意向后端传递参数的形式，实际上这里用push方法要更好一些
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      const result = res.data;
      if(result) {
        dispatch(changeLogin())
      } else {
        alert('登录失败');
      }
      }
    )
  }
};

export const logOut = () => ({
  type: constants.LOGOUT,
  value: false
});
