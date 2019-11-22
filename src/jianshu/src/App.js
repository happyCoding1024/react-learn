import React from 'react';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login'
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
          {/*下面这样写当访问的是 /detail2 这种形式时也不会进行跳转，原因在于下面的是精确匹配
          若想实现也匹配 /detail/2 这种形式，可以将path写成 '/detail/:id'
          */}
          {/*<Route path='/detail' exact component={Detail}></Route>*/}
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path={'/login'} exact component={Login}></Route>
				</div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
