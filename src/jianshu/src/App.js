import React from 'react';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    // Provider组件使得内部的组件都有能力去获取store中的数据
    
    <Provider store={store}>
      <div>
      <Header />
      {/* BrowserRouter 里面的内容表示要使用路由了 */}
      <BrowserRouter>
				<div> 
					{/* 当访问根目录是显示返回<div>home</div>， react表示精确的url，不加这个的话
					 访问 /detail 也会访问 / */}
					<Route path='/' exact render={()=><div>home</div>}></Route>
					<Route path='/detail' exact render={()=><div>detail</div>}></Route>
				</div>      	
      </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
