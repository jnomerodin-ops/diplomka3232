import { createContext, useContext, useEffect, useState } from 'react'
import { flushSync } from 'react-dom'

const Ctx = createContext(null)
const read = () => {
  try {
    return localStorage.getItem('theme')
  } catch {
    return null
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => read() || 'dark')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])


  const toggle = (x, y) => {
    const next = theme === 'dark' ? 'light' : 'dark'
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || still) return setTheme(next)
    const tr = document.startViewTransition(() => {
      document.documentElement.dataset.theme = next
      flushSync(() => setTheme(next))
    })
    tr.ready
      .then(() => {
        const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
        document.documentElement.animate(
          { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
          { duration: 800, easing: 'cubic-bezier(.2,.8,.2,1)', pseudoElement: '::view-transition-new(root)' },
        )
      })
      .catch(() => {})
  }
  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>
}

export const useTheme = () => useContext(Ctx)
