import React, { Component } from 'react';
import { IconFont } from '../../statics/iconfont/iconfont';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'; // connect方法使得Provider中包裹的组件和store建立连接
import {
  HeaderWrapper, // HeaderWrapper 就是一个带样式的div标签
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  render() {
    return (
      <HeaderWrapper>
        <IconFont/>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition // 设置搜索框动画
              in={this.state.focused} // 控制入场和出场动画,就是true或false的值
              timeout={200}  // 动画时长200ms
              classNames="slide" // 当是字符串时{}也可以不写,后面SearchWrapper中的.slide-enter 等类因为它起作用
              // 上面的动画设置其实已经完了，在网页面挂载NavSearch之前会添加几个样式，进场时样式名字分别为 slide-enter slide-enter-active
              // 离场时样式分别为 slide-exit slide-exit-active
              // 利用这几个样式真正实现动画效果
            >
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}
            >
              &#xe64d;
            </i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'>
            <i className="iconfont">&#xe6a4;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  // 搜索框获得焦点时，focused变为true
  handleInputFocus() {
    this.setState({
        focused: true
      }
    )
  }

  // 搜索框失去焦点时，focused变为false
  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}
// 使得Provider包裹的那些组件的props上state能够直接得到store中的state(能够直接利用state中的数据更新组件props中的state)
const mapStateToProps = (state) => {
  return {

  }
};
// 使得Provider包裹的那些组件的props上的方法能够直接调用dispatch方法
const mapDispatchToProps = (dispatch) => {

};


export default connect(mapStateToProps, mapDispatchToProps)(Header);