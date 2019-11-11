import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => { // TodoList实际上是一个UI组件，因为只有一个reder函数故可其改为一个无状态组件，提升性能。
  const { inputValue, changeInputValue, handleClick, handleDelete } = props;
  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={changeInputValue}
        />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          props.list.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => handleDelete(index)}
                >
                  {item}
                </li>
              )
            }
          )
        }
      </ul>
    </div>
  )
};

// state 就是store中的数据
// 注意无论是mapStateToProps还是mapDispatchToProps都是映射到组件的props上，return返回的对象
// 的属性都是组件props上的属性
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue, // 前面的inputValue指的是TodoList组件props上的inputValue，后面的state.inputValue指的是store中state的inputValue
    list: state.list
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) { // changeInputValue 指的是组件props上的changeInputValue方法
      const action = {
        type: 'change_input_value',
        value: e.target.value
      };
      dispatch(action);
    },

    handleClick() {
      const action = {
        type: 'add_item'
      };
      dispatch(action);
    },

    handleDelete(index) {
      const action = {
        type: 'delete_item',
        index
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
// 注意：只要store中的数据发生变化，这里的映射会自动执行，通过mapStateToProps，组件props中的值会自动发生变化，不像之前还需要调用
// store.subscribe来更新组件state的值。

// export default 返回的并不是TodoList，TodoList是一个UI组件，和connect方法相结合后
// 返回的就是一个容器组件了。实际上export default 导出的内容是connect(mapStateToProps, mapDispatchToProps)(TodoList); 的执行结果。
// 是一个容器组件。
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);