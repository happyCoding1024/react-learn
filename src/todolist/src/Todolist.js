import React, { Component, Fragment }from 'react';
import TodoItem from './TodoItem';
import Test from './Test';
import axios from 'axios';
import './style.css';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = { // 组件的状态
        inputValue: '',
        list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入内容：</label>
            <input
              className = 'input'
              id = 'insertArea'
              type = "text"
              value = {this.state.inputValue}
              onChange = {this.handleInputChange}
            />
            <button onClick = {this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
        <Test content={this.state.inputValue} />
      </Fragment>
    )
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

componentDidMount() {
  axios.get('/api/todolist').then(() => {
    alert('succ');
  } ).catch(() => {
    alert('error');
  });
}

  handleInputChange(e) {
    const value = e.target.value;
      this.setState( () => ( {
        inputValue: value
      }));
  }

  handleBtnClick(e) {
      this.setState( (prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }));
  }

  handleItemDelete(index) {

      this.setState((prevState) => {
          const list = [...prevState.list];
          list.splice(index, 1);
          return {list};
      });
  }

  getTodoItem() {
      return this.state.list.map((item, index) => {
        return (
            <TodoItem
              key = {index}
              content = {item}
              index = {index}
              deleteItem = {this.handleItemDelete}
            />
        );
      });
    }
}

export default Todolist;