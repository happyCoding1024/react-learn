import React, { Component, Fragment } from 'react';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  render() {
    const { content } = this.props;
    return (
      <Fragment>
        <li
          key={this.props.index}
          onClick={this.handleBtnClick}
        >
          { content }
        </li>
      </Fragment>
    )
  }

  handleBtnClick(e) {
    this.props.handleDelete(this.props.index);
  }
}

export default TodoItem;
