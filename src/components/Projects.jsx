import { useRef } from 'react'
import { projects } from '../data/content'
import { useLang } from '../context/LangContext'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { t } = useLang()
  const track = useRef(null)
  const go = (dir) => {
    const el = track.current
    el.scrollBy({ left: dir * (el.firstElementChild.offsetWidth + 24), behavior: 'smooth' })
  }
  return (
    <section className="sec" id="projects">
      <span className="mono">{t('n_projects')}</span>
      <Reveal as="h2">{t('h_projects')}</Reveal>
      <div className="car">
        <div className="arrows">
          <button className="pill" aria-label="Prev" onClick={() => go(-1)}>‹</button>
          <button className="pill" aria-label="Next" onClick={() => go(1)}>›</button>
        </div>
        <div className="track" ref={track}>
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
