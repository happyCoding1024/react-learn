import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { actionCreators } from './store';


class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    // 如果没有登录就显示登录页面，如果已经登录了就跳回到首页
    if(!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            {/*this.account 里面存的是Input节点的内容而不仅仅输入框中输入的内容*/}
            <Input placeholder='账号' ref={(input) => {this.account = input}}/>
            <Input placeholder='密码' type='password' ref={(input) => {this.password=input}}/>
            <Button onClick= {() => this.props.login(this.account, this.password)} >登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else {
      // Redirect 表示重定向到哪里，这里表示重定向到首页
      return <Redirect to='/'/>
    }
  }
}

const mapState = (state) => ({
  // 第一次写的时候，这个属性名也叫login，下面的函数名就会覆盖这个属性名。
  // login: state.getIn(['login', 'login'])
  loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem) {
    // 通过 accountElem.value 和 passwordElem.value 可以得到在输入框中输入的内容
    dispatch(actionCreators.login(accountElem.value, passwordElem.value));
  }
});

export default connect(mapState, mapDispatch)(Login);