import React, { Component } from 'react';
// Topic 组件的功能比较少，没必要单独建立一个style.js文件来管理内部的样式
// 可以在外层的style.js文件中写样式
import { TopicWrapper, TopicItem } from '../style';
// 和store建立连接
import { connect } from 'react-redux';

class Topic extends Component {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return ( // 这里在做一个循环，TopicItem每一项都要给一个独一无二的key值
              <TopicItem key={item.get('id')}>
                <img
                  className='topic-pic'
                  src= {item.get('imgUrl')} // 因为item是一个immutable对象因此要使用get方法获取属性
                  alt='' // 如果不加这个alt属性就会有警告
                />
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);