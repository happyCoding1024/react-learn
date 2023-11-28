import { useEffect, useRef, useState } from 'react'

export const useMount = (fn: any) => {
  useEffect(() => {
    fn()
  }, [])
}

export const useUnMount = (fn: any) => {
  const ref = useRef(fn)
  
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current?.()
    }
  }, [])
}


export const useDebounceFn = (fn, delay) => {
  const timerRef = useRef(null)

  return (...args) => {
    clearTimeout(timerRef.current)

    timerRef.current = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

export const useDebounce = () => {

}

export const useThrottle = (fn, interval) => {
  const execLockRef = useRef(false)
  const timerRef = useRef(null)
  

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [])

  return (...args) => {
    if(execLockRef.current) return
    fn(...args)
    execLockRef.current = true
    timerRef.current = setTimeout(() => {
      execLockRef.current = false
    }, interval)
  }
}

function circularReference() {  
  let obj1 = {  };  
  let obj2 = {    b: obj1  };  
  obj1.a = obj2;  
  let c = JSON.decycle(obj1);  
  console.log(JSON.stringify(c));
}
circularReference();


