import { useEffect, useState, useMemo, useCallback } from "react";

import { Button, Input } from 'antd'

import { Child  } from './child'


import { useDebounceFn, useThrottle, useMount } from './hooks'

const App = () => {
  const [flag, setFlag] = useState(false)
  const [value, setValue] = useState('')

  const handleClick = () => {
    console.log('点击了')
    setFlag(!flag)
  }

  const handleSearch = useDebounceFn((value: string) => {
    console.log('执行搜索操作', value)
  }, 1000)
  
  const handleChange = (e) => {
    setValue(e.target.value)
    handleSearch(e.target.value)
  }

  
  const handleMove = useThrottle((e) => {
    console.log("🚀 ~ file: App.tsx:26 ~ handleMove ~ e:", e)
  }, 2000)


  useMount(() => {
    window.onmousemove = handleMove
  })

  return (
    <>
      <Button onClick={useDebounceFn(handleClick, 2000)}>切换</Button>
      {flag && <Child></Child>}
      <Input value={value} onChange={handleChange}></Input>
      
    </>
  );
};

export default App