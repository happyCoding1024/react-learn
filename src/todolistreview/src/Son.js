import React, { Component } from 'react';

class Son extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 10
    }
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        点我加1
      </div>
    )
  }
  handleClick() {
    this.props.add(this.state.a)
  }
}

export default Son;