import React, { Component, Fragment } from 'react';
import Son from './Son';

class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    // 注意这个地方必须加上bind，因为要保证子组件中调用的add方法是在父组件的运行环境下执行的。
    return (
      <Fragment>
        <Son
          add={this.add.bind(this)}
          a={this.state.count}
        >
        </Son>
        <div>count:{this.state.count}</div>
      </Fragment>
    )
  }
  add(num) {
    this.setState({
      count: num+1
    })
  }
}

export default Father;