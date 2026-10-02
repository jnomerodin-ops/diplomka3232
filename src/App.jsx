import { useState } from 'react'
import Background from './components/Background'
import Cursor from './components/Cursor'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Interests from './components/Interests'
import InterestOverlay from './components/InterestOverlay'
import Contact from './components/Contact'
import { useLang } from './context/LangContext'

export default function App() {
  const { t } = useLang()
  const [activeInterest, setActiveInterest] = useState(null)

  return (
    <>
      <Background />
      <Cursor />
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Interests onOpen={setActiveInterest} />
        <Contact />
      </main>
      <footer>{t('foot')}</footer>
      <InterestOverlay activeId={activeInterest} onClose={() => setActiveInterest(null)} />
    </>
  )
}
