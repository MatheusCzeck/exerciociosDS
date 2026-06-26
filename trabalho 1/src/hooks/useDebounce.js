import { useEffect, useRef } from 'react'

export function useDebounce(callback, delay = 500) {
  const timerRef = useRef(null)

  const debounce = (valor) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    // Se estiver vazio, dispara imediatamente para resetar a tela
    if (!valor.trim()) {
      callback('')
      return
    }

    timerRef.current = setTimeout(() => {
      callback(valor)
    }, delay)
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return debounce
}