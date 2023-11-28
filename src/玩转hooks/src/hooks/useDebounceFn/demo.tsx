import React from 'react'
import { useDebounceFn } from './useDebounceFn'
import { Input } from 'antd'

export const Demo = () => {
  
  const handleChange = useDebounceFn((e: any) => {
    const value = e.target.value
    console.log("🚀 ~ file: index.tsx:9 ~ handleChange ~ value:", value)
  }, 2000)

  return <>
    <Input onChange={handleChange}></Input>
  </>
}