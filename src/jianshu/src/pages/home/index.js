import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { BackTop } from './style';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

class Home extends PureComponent {


  handleScrollTop() {
    window.scrollTo(0, 0)
  }
 	render() {
		return (
				<HomeWrapper>
          <HomeLeft>
            <img 
            className='banner-img' 
            src="//upload-images.jianshu.io/upload_images/1211570-c58cab32ffc3970f" 
            alt=''
            /> 
            <Topic className='banner-topic'></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
          { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null }
				</HomeWrapper>
			)
	}

	componentDidMount() {
	  this.props.changeHomeData();
	  this.bindEvents();
  }

  // 下面的scroll事件是绑定在windows中的，当组件被从页面上移除时要将事件scroll从window上移除
  // componentWillUnmount 组件被销毁时执行，此时解绑在window上的scroll事件
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    // 绑定scroll事件，只要滚动就会调用第二个参数中的函数
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  // 当当前在顶部这时候滚动时调用这个方法
  changeScrollTopShow() {
    // scrollTop 表示的是距离顶部的距离，当最初位于最顶部不滚动时值为0
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    }else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(mapState, mapDispatch)(Home);