import { createContext, useContext, useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { ui } from '../data/content'

const Ctx = createContext(null)
const read = () => {
  try {
    return localStorage.getItem('lang')
  } catch {
    return null
  }
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => read() || 'ru')
  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* storage unavailable */
    }
  }, [lang])

  const toggleLang = () => {
    const next = lang === 'ru' ? 'en' : 'ru'
    if (document.startViewTransition) document.startViewTransition(() => flushSync(() => setLang(next)))
    else setLang(next)
  }
  const tr = (o) => o[lang] // {ru, en} -> строка
  const t = (k) => ui[k][lang] // текст интерфейса по ключу
  return <Ctx.Provider value={{ lang, toggleLang, t, tr }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
