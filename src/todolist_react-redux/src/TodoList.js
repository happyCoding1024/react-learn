import React, { Component } from 'react';
import store from './store';
import { connect } from 'react-redux';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.changeInputValue}
          />
          <button>提交</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    )
  }
}
// state 就是store中的数据
// 注意无论是mapStateToProps还是mapDispatchToProps都是映射到组件的props上，return返回的对象
// 的属性都是组件props上的属性
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue // 前面的inputValue指的是TodoList组件props上的inputValue，后面的state.inputValue指的是store中state的inputValue
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) { // changeInputValue 指的是组件props上的changeInputValue方法
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    }
  }
};
// 在index.js中通过Provider已经使Todolist组件有能力去获取store中的内容，注意只是有能力去获取。那么怎样去获取呢？
// 要获取之前需要先建立连接，通过connnect就可以建立与store之间的连接
// 那么怎样取得store中的内容呢，以什么样的映射关系取到store中的内容呢？
// connect 方法中的 mapStateToProps 就是这个映射关系，它可以将store中的数据映射到组件的props上。
// 如果想对store的数据做修改，mapDispatchToProps中的Dispatch指的是store.dispatch,这里的意思是将store.dispatch
// 方法映射到组件的props上，其实就是使得在组件的props上可以调用dispatch方法了。
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);