import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';


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
}

export default Home;