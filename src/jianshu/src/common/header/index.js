import React, { Component } from 'react';
import {
  HeaderWrapper, // HeaderWrapper 就是一个带样式的div标签
  Logo,
  Nav
} from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav />
      </HeaderWrapper>
    )
  }
}

export default Header;