import React, { Component, Fragment } from 'react';
// 引入 antd 的样式文件
import 'antd/dist/antd.css';
// 引入 antd 组件
import { Input, Button, List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class TodoList extends Component {

  render() {
    return (
      <Fragment>
        <div style={{marginLeft: '10px', marginTop: '10px'}}>
          { /* 使用Input组件 */}
          <Input placeholder='todo info' style={{width: '300px', marginRight: '10px'}} />
          { /* 使用Button组件 */}
          <Button type='primary'>submit</Button>
          <List
            style={{marginLeft: '10px', marginTop: '15px', width: '300px'}}
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
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