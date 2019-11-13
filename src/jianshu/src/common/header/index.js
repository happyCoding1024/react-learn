import React, { Component }from 'react';
import { IconFont } from '../../statics/iconfont/iconfont';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }   from './store';
import { connect } from 'react-redux'; // connect方法使得Provider中包裹的组件和store建立连接
import {
  HeaderWrapper, // HeaderWrapper 就是一个带样式的div标签
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";

class Header extends Component {
  render() {
    const { focused, list, handleInputFocus, handleInputBlur } = this.props;
    const getListArea = () => {
      if(focused) {
        return (
          <SearchInfo >
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            {/* div 在这里没有什么实际意义，只是起到占一行的作用 */}
            <SearchInfoList>
              {
                // this.props.list 是一个 immutable 数组，它也提供了以一个map方法
                  list.map((item) => {
                  // 这个地方注意一定要return出去，只有将 JSX 语句return出去才和上面的JSX语句一样被渲染解析。
                  return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
                })
              }
            </SearchInfoList>
          </SearchInfo>
        );
      }else {
        return null;
      }
    };
    return(
      <HeaderWrapper>
        <IconFont/>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition // 设置搜索框动画
              in={focused} // 控制入场和出场动画,就是true或false的值
              timeout={200}  // 动画时长200ms
              classNames="slide" // 当是字符串时{}也可以不写,后面SearchWrapper中的.slide-enter 等类因为它起作用
              // 上面的动画设置其实已经完了，在网页面挂载NavSearch之前会添加几个样式，进场时样式名字分别为 slide-enter slide-enter-active
              // 离场时样式分别为 slide-exit slide-exit-active
              // 利用这几个样式真正实现动画效果
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}
            >
              &#xe64d;
            </i>
            {getListArea()}
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


}


// mapStateToProps 和 mapDispatchToProps 方法 return出去的都是对象，并且对象的属性都是组件this.props的属性。
// 使得Provider包裹的那些组件的props上state能够直接得到store中的state(能够直接利用state中的数据更新组件props中的state)
const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused, // 注意利用的reducer合并之后取store中的focused值时应该写成 state.header.focused
    // 使用immutable之后，现在的state是JS对象，state.header是一个immutable对象，访问state.header上面的属性不能再使用.运算符了，需要使用get方法。
    // 不明白为什么state是JS对象，state.header是一个immutable对象？
    // focused: state.get('header').get('focused') // 普通对象是没有get方法的
    // 在 redux-immutable 中提供了 getIn 这种取immutable对象属性的方法。
    focused: state.getIn(['header', 'focused']), // 表示从state这个immutable对象中的header中取focused属性的值
    list: state.getIn(['header', 'list'])
  }
};
// 使得Provider包裹的那些组件的props上的方法能够直接调用dispatch方法
const mapDispatchToProps = (dispatch) => {
  return {
    // 利用 ES6 中对象方法的简洁表示法
    // 输入框获得焦点时执行的函数
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
      // 运用reducer合并后，现在有一点不明白：是不是 dispatch(action) 会将 state 和action 加载到所有的 reducer 中呢？ 应该是的
    },
    // 输入框失去焦点时执行的函数
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    }

    /////////////你这个箭头函数的写法都是错的/////////////////
    // 因为这里并不是回调函数，所以也没必要写成箭头函数的形式
    // handleInputFocus () => {
    //   const action = {
    //     type: 'HANDLE_INPUT_FOCUS',
    //   };
    //   dispatch(action);
    // }
    ///////////////////////////////////////////////////////
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);