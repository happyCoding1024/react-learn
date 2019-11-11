import React, { Component } from 'react';
import 'antd/dist/antd.css';
// import { Input, Button, List } from "antd";
import store from './store/index.js';
import TodoListUI from './TodoListUI'
import axios from 'axios';
import {
  getInputChangeAction,
  getAddItemAction,
  getDleteItemAction,
  getInitList
  // initListAction,
  // getTodoList
} from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    store.li(this.handleStoreChange.bind(this));
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list= {this.state.list}
        handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleButtonClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDleteItemAction(index);
    store.dispatch(action);
  }
}

export  default TodoList;