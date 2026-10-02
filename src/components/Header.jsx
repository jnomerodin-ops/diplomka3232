import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'

const links = [['about', 'n_about'], ['skills', 'n_skills'], ['projects', 'n_projects'], ['path', 'n_path'], ['contact', 'n_contact']]

export default function Header() {
  const { toggle } = useTheme()
  const { toggleLang, t } = useLang()
  const bar = useRef(null)
  useEffect(() => {
    const f = () => {
      const h = document.documentElement.scrollHeight - innerHeight
      bar.current.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`
    }
    f()
    addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  return (
    <>
      <div id="prog" ref={bar} />
      <header>
        <a className="logo" href="#top">S<b>.</b>T</a>
        <nav>
          {links.map(([id, k]) => (
            <a key={id} href={`#${id}`}>{t(k)}</a>
          ))}
        </nav>
        <div className="ctl">
          <button className="pill" aria-label="Theme" onClick={(e) => {
            const b = e.currentTarget.getBoundingClientRect()
            toggle(b.left + b.width / 2, b.top + b.height / 2)
          }}>◐</button>
          <button className="pill" aria-label="Language" onClick={toggleLang}>RU / EN</button>
        </div>
      </header>
    </>
  )
}
