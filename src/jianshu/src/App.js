import React from 'react';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    // Provider组件使得内部的组件都有能力去获取store中的数据
    
    <Provider store={store}>
      {/* BrowserRouter 里面的内容表示要使用路由了 */}
      <BrowserRouter>
        <Header />
				<div> 
					{/* 当访问根目录是显示返回<div>home</div>， react表示精确的url，不加这个的话访问 /detail 也会访问 / */}
          {/*使用组件时利用Route的component属性*/}
					<Route path='/' exact component={Home}></Route>
					<Route path='/detail' exact component={Detail}></Route>
				</div>      	
      </BrowserRouter>
    </Provider>
  );
}

export default App;
