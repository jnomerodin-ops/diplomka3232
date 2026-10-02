import { interests } from '../data/content'
import { useLang } from '../context/LangContext'
import Reveal from './Reveal'


const OPENABLE = ['design', 'music', 'books', 'sport']

export default function Interests({ onOpen }) {
  const { t, tr } = useLang()
  return (
    <section className="sec" id="int">
      <span className="mono">{t('n_int')}</span>
      <Reveal as="h2">{t('h_int')}</Reveal>
      <div className="ig">
        {interests.map((it, i) => {
          const openable = OPENABLE.includes(it.id)
          return (
            <Reveal
              key={it.id}
              className={`it${openable ? ' it-open' : ''}`}
              delay={i * 0.07}
              role={openable ? 'button' : undefined}
              tabIndex={openable ? 0 : undefined}
              onClick={openable ? () => onOpen(it.id) : undefined}
              onKeyDown={
                openable
                  ? (e) => (e.key === 'Enter' || e.key === ' ') && onOpen(it.id)
                  : undefined
              }
            >
              <em>{it.icon}</em>
              {tr(it.label)}
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
