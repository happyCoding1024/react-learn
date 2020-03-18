import React, { Component, Fragment } from 'react';
import './style.css';
import Todoitem from './Todoitem';
class Todolist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <Fragment>
        <label htmlFor='insertArea'>输入内容</label>
        <input
          id='insertArea'
          className="input"
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <div key={index}>
                  {
                    /*
                      <li
                        key={index}
                        onClick={this.handleItemDelete.bind(this, index)}
                      >
                        {item}
                      </li>
                    */
                  }
                  <Todoitem
                    content={item}
                    index={index}
                    handleDelete = {this.handleItemDelete.bind(this)}
                  />
                </div>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick(e) {
    // var list1 = this.state.list;
    // list1.push(this.state.inputValue);
    // this.setState({
    //   list: list1
    // })
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }

  handleItemDelete(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }


}

export default Todolist