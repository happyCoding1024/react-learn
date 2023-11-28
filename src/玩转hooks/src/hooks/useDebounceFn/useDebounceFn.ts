import { useMemo } from "react"
import useLatest from "../../hooks/useLatest"

type TFn = (...args: any[]) => any

export function useDebounceFn <T extends TFn>(fn: T, wait: number) {
  const fnRef = useLatest(fn)
  const waitRef = useLatest(wait)
  const timerRef = useLatest<NodeJS.Timeout | null>(null)

  const debounce = useMemo(() => (...args: Parameters<T>) => {
    if (timerRef.current) clearTimeout(timerRef.current)

    timerRef.current = setTimeout((): ReturnType<T> => {
      return fnRef.current(...args)
    }, waitRef.current)
  }, [fnRef, timerRef, waitRef])

  return debounce
}

