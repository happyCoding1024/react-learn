import React, { Component, Fragment } from 'react';
import Son from './Son';

class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      list: [2]
    }
  }
  render() {
    // 注意这个地方必须加上bind，因为要保证子组件中调用的add方法是在父组件的运行环境下执行的。
    return (
      <Fragment>
        {/*<Son*/}
        {/*  add={this.add.bind(this)}*/}
        {/*  a={this.state.count}*/}
        {/*>*/}
        {/*</Son>*/}
        {/*<div ref={(div)=>{this.div=div}}>*/}
        {/*  count:{this.state.count}*/}
        {/*</div>*/}
        <ul
          ref={(ul)=>{this.ul=ul}}
          onClick={this.handleClick.bind(this)}
        >
          点我ul
          {this.state.list.map((item, index)=>{
            return (
              <li key={item}>{item}</li>
            )
          })}
        </ul>
      </Fragment>
    )
  }
  add(num) {
    this.setState({
      count: num+1
    })
  }
  handleClick() {
    console.log(this.state.list)
    console.log(this.ul)
    this.setState((prevState)=>({
      list: [...prevState.list, 1]
    }));
    console.log(this.ul)

  }
}

export default Father;