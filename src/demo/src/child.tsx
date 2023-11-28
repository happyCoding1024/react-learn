import { useState } from "react";

import { useUnMount } from './hooks'


export const Child = () => {
  const [count, setCount] = useState(0)
  
  const callback = () => {
    console.log(count)
    alert(count)
  }

  useUnMount(callback)

  return (
    <>
      <div onClick={() => { setCount(count + 1)}}>加1</div>
      <div>{count}</div>
      <div>child</div>
    </>
  );
};