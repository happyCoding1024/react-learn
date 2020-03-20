import React, { Component, Fragment } from 'react';
// 引入 antd 组件
import { Input, Button, List } from 'antd';
import store from './store';
import { changeInputValueAction, addTodoItemAction, deleteTodoItemAction } from './store/actionCreator';

// 引入 antd 的样式文件
import 'antd/dist/antd.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    TodoList.handleInputChange = TodoList.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    TodoList.handleBtnClick = TodoList.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <Fragment>
        <div style={{marginLeft: '10px', marginTop: '10px'}}>
          { /* 使用Input组件 */}
          <Input
            value={this.state.inputValue}
            style={{width: '300px', marginRight: '10px'}}
            onChange={TodoList.handleInputChange}
          />
          { /* 使用Button组件 */}
          <Button type='primary' onClick={TodoList.handleBtnClick}>submit</Button>
          <List
            style={{marginLeft: '10px', marginTop: '15px', width: '300px'}}
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={TodoList.handleDelete.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </Fragment>
    )
  }

  static handleInputChange(e) {
    const action = changeInputValueAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(()=> store.getState())
  }

  static handleBtnClick() {
    const action = addTodoItemAction();
    store.dispatch(action);
  }

  static handleDelete(index) {
    const action = deleteTodoItemAction(index)
    store.dispatch(action);
  }

}

export default TodoList;