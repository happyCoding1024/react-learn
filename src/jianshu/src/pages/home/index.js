import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';
import { connect } from 'react-redux';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";

class Home extends Component {
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
				</HomeWrapper>
			)
	}

	componentDidMount() {
	  axios.get('/api/home.json').then((res) => {
	    const result = res.data.data;
	    const action = {
	      type: 'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      };
	    this.props.changeHomeData(action);
    })
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action);
  }
});

export default connect(null, mapDispatch)(Home);