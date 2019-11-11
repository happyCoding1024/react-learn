import React, { Component } from 'react';
import {
  HeaderWrapper, // HeaderWrapper 就是一个带样式的div标签
  Logo,
  Nav,
  NavItem
} from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>Aa</NavItem>
        </Nav>
      </HeaderWrapper>
    )
  }
}

export default Header;