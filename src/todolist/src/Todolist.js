import React, { Component, Fragment }from 'react';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { // 组件的状态
            inputValue: 'hello',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                  <input
                    type="text"

                    value = {this.state.inputValue}
                    onChange = {this.handleInputChange.bind(this)}
                   />
                   <button>提交</button>
                </div>
                <ul>
                    <li>learning react</li>
                    <li>学英语</li>
                    <li>健身</li>
                </ul>

            </Fragment>
                )   
    }

    handleInputChange(e) {
        console.log(this);
        this.state.inputValue = e.target.value; // this指向Todolist，在ES6中类名实际上是一个
        // console.log(e.target.value);
    }
}

export default Todolist;
