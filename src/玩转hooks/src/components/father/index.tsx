import React, { useState } from 'react';
import { Button } from "antd";
import { Child } from '../child';

interface IProps {
}

function sum(a: number, b: number) {
  console.log('两数之和');
  return a + b;
}

export const Father: React.FC<IProps> = () => {
  const [flag, setFlag] = useState<boolean>(true);

  const data = sum(1, 2);

  return         <>
  <div>我是父组件</div>
  <Button type="primary" onClick={() => setFlag((v) => !v)}>
    切换状态
  </Button>
  <Child flag={flag}>大家好，我是小杜杜，一起玩转Hooks吧！</Child>
</>
}