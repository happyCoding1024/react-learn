import React, { FC, useMemo, useState } from 'react';
import { Button } from 'antd';

interface IProps {}

function sum(a: number, b: number) {
  console.log('sum 执行了');
  return a + b;
}

const Child: React.FC<IProps> = (props) => {
  const { children } = props;
  return <div>{children}</div>
}

export const UseCallbackTest:FC<IProps> = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((count) => count + 1)
  }

  // 每次点击加1按钮时都会执行sum函数
  // const data = sum(1, 2);

  // 只有第一次会执行sum函数，点击加1按钮时不会执行sum函数
  const data = useMemo(() => sum(1, 2), []);

  const childClick = () => {
    
  }

  const childUseCallbackClick = () => {
    
  }
  
  return <div>
    <Button onClick={handleClick}>加1</Button>
    {/* <Child handleClick={}>onClick使用useCallback</Child>
    <Child handleClick={}>onClick不使用useCallback</Child> */}
  </div>
}

