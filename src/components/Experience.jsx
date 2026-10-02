import { useEffect, useRef } from 'react'
import { experience } from '../data/content'
import { useLang } from '../context/LangContext'
import Reveal from './Reveal'

export default function Experience() {
  const { t, tr } = useLang()
  const tl = useRef(null)
  const fill = useRef(null)
 
  useEffect(() => {
    const f = () => {
      const b = tl.current.getBoundingClientRect()
      fill.current.style.height = Math.max(0, Math.min(b.height, innerHeight * 0.6 - b.top)) + 'px'
    }
    f()
    addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  const txt = (v) => (typeof v === 'string' ? v : tr(v))
  return (
    <section className="sec" id="path">
      <span className="mono">{t('n_path')}</span>
      <Reveal as="h2">{t('h_path')}</Reveal>
      <div className="tl" ref={tl}>
        <div className="fill" ref={fill} />
        {experience.map((e) => (
          <Reveal key={e.id} className="ti">
            <span className="mono">{e.period}</span>
            <h3>{tr(e.title)}</h3>
            <p>{txt(e.place)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
