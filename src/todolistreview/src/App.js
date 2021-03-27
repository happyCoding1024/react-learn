import React from "react";
import Demo from "./Demo";
import { math } from 'math_library1';

class App extends React.Component {
  render() {
    return <Demo />;
  }
  componentDidMount() {
    console.log(123);
    console.log(math);
  }
}

export default App;
