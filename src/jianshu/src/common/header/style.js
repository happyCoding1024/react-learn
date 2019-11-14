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
  padding: 0 50px;
  box-sizing: border-box;
`;
// NavItem 就是一个带样式的div标签
export const NavItem = styled.div` 
  line-height: 56px;
  padding: 0 15px;
  font-size: 16px;
  color: #333;
  &.left { // 有left类的NavItem组件执行下面的样式
    float: left;
  }
  &.right { // 有right类的NavItem组件执行下面的样式
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
// NavSearch 就是一个带样式的input标签
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})` 
  width: 160px;
  border: none;
  height: 38px;
  outline: none;
  border-radius: 19px;
  background: #eee; 
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  &.focused { // 当 &.focused 在&::placeholder 下面时就不起作用原因不明
    width: 240px;
  }
  ///////////////搜索框动画样式开始//////////////////////////////////////////
  &.slide-enter {
      transition: all 0.2s ease-out; // 定义进入动画的时长和方式，ease-out不理解
  }
  &.slide-enter-active {
    width: 240px; // 按照上面定义的动画时长和方式，最终要达到的状态。这两条语句合起来的效果就是width从160px到240px在0.2s内完成
  }
  &.slide-exit {
    transition: all 0.2s ease-in; // 定义动画的时长和方式
  }
  &.slide-exit-active {
    width: 160px;
  }
  ///////////////搜索框动画样式结束//////////////////////////////////////////   
  &::placeholder { // 指的是NavSearch组件下的placeholder
    color: #666;
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block; // 只有块元素，transform才会生效
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .3s ease-in; // 所有的动画效果都在2ms之内完成，先慢后快
    transform-origin: center center; // 旋转中心
  }
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px; 
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const Addition = styled.div`
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px; 
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }nn
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    // background: green;
    &.focused { 
      background: #777;
      color: #fff;
    }  
  }
`;