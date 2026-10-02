import { useEffect, useRef } from 'react'
import { profile, marquee } from '../data/content'
import { useLang } from '../context/LangContext'

const CH = 'ABCDEFGHJKLMNPRSTUVWXYZabdefghkmnrstuАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЭЮЯ#/<>_+'


function scramble(el, to) {
  const from = el.textContent
  const len = Math.max(from.length, to.length)
  const q = Array.from({ length: len }, () => ({ s: (Math.random() * 16) | 0, e: 16 + ((Math.random() * 24) | 0) }))
  let f = 0
  cancelAnimationFrame(el._r)
  const step = () => {
    let o = ''
    let d = 0
    for (let i = 0; i < len; i++) {
      if (f >= q[i].e) {
        o += to[i] || ''
        d++
      } else if (f >= q[i].s) o += '<i>' + CH[(Math.random() * CH.length) | 0] + '</i>'
      else o += from[i] || ''
    }
    el.innerHTML = o
    if (d < len) {
      f++
      el._r = requestAnimationFrame(step)
    } else el.textContent = to
  }
  step()
}


const mag = {
  onMouseMove: (e) => {
    const el = e.currentTarget
    const b = el.getBoundingClientRect()
    el.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * 0.25}px,${(e.clientY - b.top - b.height / 2) * 0.35}px)`
  },
  onMouseLeave: (e) => (e.currentTarget.style.transform = ''),
}

export default function Hero() {
  const { lang, t, tr } = useLang()
  const h1 = useRef(null)
  const name = profile.name[lang]
  useEffect(() => {
    const el = h1.current
    scramble(el, name)
    return () => cancelAnimationFrame(el._r)
  }, [name])
  const items = [...marquee, ...marquee, ...marquee, ...marquee]
  return (
    <>
      <section className="sec hero">
        <span className="mono">{t('hello')}</span>
        <h1 id="name" ref={h1} aria-label={name} onMouseEnter={() => scramble(h1.current, name)} />
        <p className="lead">{t('lead')}</p>
        <div className="stamp">
          <div><span>{t('l_role')}</span><b>{tr(profile.role)}</b></div>
          <div><span>{t('l_loc')}</span><b>{tr(profile.location)}</b></div>
          <div><span>{t('l_status')}</span><b>{tr(profile.status)}</b></div>
          <div><span>{t('l_stack')}</span><b>{profile.stack.join(' · ')}</b></div>
        </div>
        <div className="btns">
          <a className="btn" href="#projects" {...mag}>{t('cta1')}</a>
          <a className="btn" href="#contact" {...mag}>{t('cta2')}</a>
        </div>
      </section>
      <div className="mq" aria-hidden="true">
        <div>{items.map((m, i) => <span key={i}>{m}</span>)}</div>
      </div>
    </>
  )
}
