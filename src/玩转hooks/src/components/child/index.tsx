import React from 'react';

export const Child: React.FC<any> = (props) => {
  const { flag, children } = props;
  return (
    <div style={{ border: "1px solid #000", padding: 20 }}>
      <div>我是子组件</div>
      <div>父组件传递的flag：{JSON.stringify(flag)}</div>
      <div>父组件传递的children：{children}</div>
    </div>
  );
};