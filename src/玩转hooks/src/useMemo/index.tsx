import React, { FC, useMemo, useState } from 'react';
import { Button } from 'antd';

interface IProps {

}

function sum(a: number, b: number) {
  console.log('sum 执行了');
  return a + b;
}

export const UseMemoTest:FC<IProps> = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((count) => count + 1)
  }

  // 每次点击加1按钮时都会执行sum函数
  // const data = sum(1, 2);

  // 只有第一次会执行sum函数，点击加1按钮时不会执行sum函数
  const data = useMemo(() => sum(1, 2), []);
  

  return <div>
    <Button onClick={handleClick}>加1</Button>
    <div>state: count = {count}</div>
    <div>常数: data = {data}</div>
  </div>
}