import { useLang } from '../context/LangContext'


function Art({ seed }) {
  let s = seed * 9301 + 49297
  const r = () => (s = (s * 9301 + 49297) % 233280) / 233280
  const items = Array.from({ length: 7 }, (_, i) => ({ i, x: (r() * 320) | 0, y: (r() * 180) | 0, rad: (14 + r() * 70) | 0 }))
  return (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      {items.map(({ i, x, y, rad }) => (
        <g key={i}>
          <circle cx={x} cy={y} r={rad} fill="none" stroke={i % 3 ? 'currentColor' : 'var(--acc)'} strokeWidth={i % 3 ? 0.6 : 1.6} opacity={i % 3 ? 0.35 : 0.95} />
          <line x1={x - rad} y1={y} x2={x + rad} y2={y} stroke="var(--acc)" strokeWidth="0.5" opacity="0.5" />
        </g>
      ))}
    </svg>
  )
}

export default function ProjectCard({ p, i }) {
  const { t, tr } = useLang()
  const tilt = (e) => {
    const el = e.currentTarget
    const b = el.getBoundingClientRect()
    el.style.setProperty('--ry', ((e.clientX - b.left) / b.width - 0.5) * 10 + 'deg')
    el.style.setProperty('--rx', (0.5 - (e.clientY - b.top) / b.height) * 10 + 'deg')
  }
  const reset = (e) => {
    e.currentTarget.style.setProperty('--rx', '0deg')
    e.currentTarget.style.setProperty('--ry', '0deg')
  }
  return (
    <article className="card" onMouseMove={tilt} onMouseLeave={reset}>
      <Art seed={i + 3} />
      <span className="mono">P-0{i + 1}</span>
      <h3>{p.title}</h3>
      <p>{tr(p.desc)}</p>
      <div className="tags">{p.stack}</div>
      <a className="lk" href={p.link}>{t('open')}</a>
    </article>
  )
}
