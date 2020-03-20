import React, { Component, Fragment } from 'react';
// 引入 antd 的样式文件
import 'antd/dist/antd.css';
// 引入 antd 组件
import { Input, Button, List } from 'antd';
import store from './store';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(this.state.data);
  }

  render() {
    return (
      <Fragment>
        <div style={{marginLeft: '10px', marginTop: '10px'}}>
          { /* 使用Input组件 */}
          <Input placeholder={this.state.inputValue} style={{width: '300px', marginRight: '10px'}} />
          { /* 使用Button组件 */}
          <Button type='primary'>submit</Button>
          <List
            style={{marginLeft: '10px', marginTop: '15px', width: '300px'}}
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item>
                {item}
              </List.Item>
            )}
          />
        </div>
      </Fragment>
    )
  }
}

export default TodoList;