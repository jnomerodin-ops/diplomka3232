import { profile } from '../data/content'
import { useLang } from '../context/LangContext'
import Reveal from './Reveal'

export default function Contact() {
  const { t } = useLang()
  const [mail, ...rest] = profile.contacts
  return (
    <section className="sec" id="contact">
      <span className="mono">{t('n_contact')}</span>
      <Reveal as="h2">{t('h_contact')}</Reveal>
      <Reveal as="a" className="mail" href={mail.href}>{mail.value}</Reveal>
      <Reveal style={{ marginTop: 36 }}>
        {rest.map((c) => (
          <a key={c.label} className="crow" href={c.href} target="_blank" rel="noreferrer">
            <span>{c.label}</span>
            <span>{c.value}</span>
          </a>
        ))}
      </Reveal>
    </section>
  )
}
