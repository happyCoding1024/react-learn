import React, { Component, Fragment } from 'react'

class Todolist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={this.handleItemDelete.bind(this, index)}
                >
                  {item}
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick(e) {
    // var list1 = this.state.list;
    // list1.push(this.state.inputValue);
    // this.setState({
    //   list: list1
    // })
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
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