// @ts-nocheck
import React from 'react';
import SearchBox from './components/search-box';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      name: 'zhangsan',
    }
  }

  render() {
    return <SearchBox />
  }
}

export default App;
