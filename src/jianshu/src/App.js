import React from 'react';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    // Provider组件使得内部的组件都有能力去获取store中的数据
    
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
