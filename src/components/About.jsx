import { useEffect, useState } from 'react'
import { profile, stats } from '../data/content'
import { useLang } from '../context/LangContext'
import Reveal, { useInView } from './Reveal'


function Num({ n, label }) {
  const [ref, on] = useInView()
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!on) return
    const t0 = performance.now()
    let id
    const u = (now) => {
      const p = Math.min((now - t0) / 1400, 1)
      setV(Math.round(n * (1 - (1 - p) ** 3)))
      if (p < 1) id = requestAnimationFrame(u)
    }
    id = requestAnimationFrame(u)
    return () => cancelAnimationFrame(id)
  }, [on, n])
  return (
    <div ref={ref}><b>{v}</b><span>{label}</span></div>
  )
}

export default function About() {
  const { t, tr } = useLang()
  return (
    <>
      <section className="sec" id="about">
        <span className="mono">{t('n_about')}</span>
        <Reveal as="h2">{t('h_about')}</Reveal>
        <div className="about">
          <Reveal as="p">{tr(profile.about)}</Reveal>
          <Reveal className="nums" delay={0.15}>
            {stats.map((s) => <Num key={s.id} n={s.n} label={tr(s.label)} />)}
          </Reveal>
        </div>
      </section>
      <section className="sec" id="skills">
        <span className="mono">{t('n_skills')}</span>
        <Reveal as="h2">{t('h_skills')}</Reveal>
        {profile.skills.map((s, i) => (
          <Reveal key={s.name} className="sk" delay={i * 0.08}>
            <div className="row"><span>{s.name}</span><span>{s.level}%</span></div>
            <div className="bar" style={{ '--w': `${s.level}%` }}><i style={{ '--d': `${0.2 + i * 0.1}s` }} /></div>
          </Reveal>
        ))}
      </section>
    </>
  )
}
