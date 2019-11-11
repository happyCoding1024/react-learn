import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

// HeaderWrapper 就是一个带样式的div标签
export const HeaderWrapper = styled.div` 
  position: relative;
  height: 58px; 
  border-bottom: 1px solid #f0f0f0;
`;
// Logo 就是一个带样式的a标签
export const Logo = styled.a.attrs({
  href: 'https://www.baidu.com'
})` 
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;
// Nav 就是一个带样式的div标签
export const Nav = styled.div` 
  width: 960px;
  margin: 0 auto; // 水平居中 
  height: 100%;
  background: green;
`;
// NavItem 就是一个带样式的div标签
export const NavItem = styled.div` 
  &.left { // 有left类的NavItem组件执行下面的样式
    float: left;
  }
  &.right { // 有right类的NavItem组件执行下面的样式
    float: right;
  }
  
`;