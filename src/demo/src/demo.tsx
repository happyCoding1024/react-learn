import React, { useState, useEffect, useRef } from 'react';
import { useMemoizedFn } from 'ahooks'

const Demo = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null)

  useEffect(() => {
      timerRef.current = setInterval(() => {
        console.log('setInterval:', count);
      }, 1000);

    return () => {
      clearInterval(timerRef.current)
    }
  }, [count]);

  return (
    <div>
      count: {count}
      <br />
      <button onClick={() => setCount(val => val + 1)}>点击加一</button>
    </div>
  );
};

export default Demo



