// 这个文件的作用就是将Detail这个组件变成一个异步加载的组件

import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
  loader: () => import('./'), // 表示异步加载当前文件夹下的index.js
  loading() { // 显示临时加载的内容
    return <div>正在加载</div>
  }
});

export default () => <LoadableComponent/>
