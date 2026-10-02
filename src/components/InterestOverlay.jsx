import { useEffect, useRef, useState } from 'react'
import { useLang } from '../context/LangContext'
import { interestPages } from '../data/interestPages'


function BasketballPage({ data, tr }) {
  return (
    <div className="ivp ivp-sport">
      <svg className="court" viewBox="0 0 400 240" aria-hidden="true">
        <rect x="4" y="4" width="392" height="232" />
        <line x1="200" y1="4" x2="200" y2="236" />
        <circle cx="200" cy="120" r="36" />
        <path d="M4 70 h50 v100 h-50" />
        <path d="M396 70 h-50 v100 h50" />
        <circle cx="54" cy="120" r="34" />
        <circle cx="346" cy="120" r="34" />
      </svg>

      <div className="ivp-stats">
        {data.stats.map((s) => (
          <div key={s.label.ru}>
            <b>{s.value}</b>
            <span>{tr(s.label)}</span>
          </div>
        ))}
      </div>

      <div className="ivp-story">
        {data.story.map((item, i) => (
          <div className="ivp-story-item" key={i}>
            <span className="mono">{tr(item.year)}</span>
            <p>{tr(item.text)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


function MusicPage({ data }) {
  return (
    <div className="ivp ivp-music">
      <div className="ivp-tracks">
        {data.tracks.map((tr_, i) => (
          <div className="ivp-track" key={i}>
            <span className="ivp-cover" style={{ '--hue': tr_.hue }} />
            <div className="ivp-track-info">
              <b>{tr_.title}</b>
              <span>{tr_.artist}</span>
            </div>
            <span className="mono ivp-genre">{tr_.genre}</span>
          </div>
        ))}
      </div>
    </div>
  )
}


function BooksPage({ data, tr }) {
  return (
    <div className="ivp ivp-books">
      {data.list.map((b, i) => (
        <div className="ivp-book" key={i}>
          <span className="ivp-spine" style={{ '--hue': b.hue }} />
          <div>
            <b>{b.title}</b>
            <span className="mono">{b.author}</span>
            <p>{tr(b.note)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function InterestOverlay({ activeId, onClose }) {
  const { t, tr } = useLang()
  const panelRef = useRef(null)
  const data = activeId ? interestPages[activeId] : null


  useEffect(() => {
    if (!activeId) return
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [activeId, onClose])

  if (!data) return null

  return (
    <div className="iv-overlay" role="dialog" aria-modal="true" aria-label={tr(data.title)}>
      <div className="iv-panel" ref={panelRef} tabIndex={-1}>
        <div className="iv-top">
          <button className="pill iv-back" onClick={onClose}>
            ← {t('back')}
          </button>
          <span className="mono">{t('h_int')}</span>
        </div>

        <div className="iv-head">
          <span className="mono">{t('open')}</span>
          <h2>{tr(data.title)}</h2>
          <p className="lead">{tr(data.tagline)}</p>
        </div>

        {activeId === 'sport' && <BasketballPage data={data} tr={tr} />}
        {activeId === 'design' && <DesignPage data={data} tr={tr} />}
        {activeId === 'music' && <MusicPage data={data} tr={tr} />}
        {activeId === 'books' && <BooksPage data={data} tr={tr} />}
      </div>
    </div>
  )
}
