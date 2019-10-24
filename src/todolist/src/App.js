import React from 'react';
import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  render() { // render函数返回什么组件就显示什么
    return (
        <div className="App">
          <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            {/*<p>*/}
            {/*  Edit <code>src/App.js</code> and save to reload.*/}
            {/*</p>*/}
            <a>
              hello world!
            </a>
          </header>
        </div>
    );
  }
}

export default App;
