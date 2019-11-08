import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from "antd";
import store from './store/index.js';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(this.state);
    this.handleInputChange = this.handleInputChange.bind(this);
    store.subscribe(this.handleStoreChange.bind(this));
  }

  render() {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder={'todo info'}
            style={{width: '300px', marginRight: '10px'}}
            onChange={this.handleInputChange}
          />
          <Button type='primary'>提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }

  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    };
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }


}

export  default TodoList;