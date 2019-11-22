import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    // 如果没有登录就跳到登录页面
    if(loginStatus) {
      return (
        <div>进入了写文章页面</div>
      )
    }else {
      // Redirect 表示重定向到哪里，这里表示重定向到首页
      return <Redirect to='/login'/>
    }
  }
}

const mapState = (state) => ({
  // 第一次写的时候，这个属性名也叫login，下面的函数名就会覆盖这个属性名。
  // login: state.getIn(['login', 'login'])
  loginStatus: state.getIn(['login', 'login'])
});

export default connect(mapState, null)(Write);