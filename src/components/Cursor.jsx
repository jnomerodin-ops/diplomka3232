import { useEffect, useRef } from 'react'


export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  useEffect(() => {
    const root = document.documentElement
    let px = innerWidth / 2
    let py = innerHeight / 2
    let x = px
    let y = py
    let id
    const move = (e) => {
      px = e.clientX
      py = e.clientY
      root.style.setProperty('--mx', px + 'px')
      root.style.setProperty('--my', py + 'px')
      dot.current.style.transform = `translate(${px}px,${py}px)`
      ring.current.classList.toggle('h', !!e.target.closest('a,button'))
    }
    const down = (e) => {
      const r = document.createElement('div')
      r.className = 'rip'
      r.style.left = e.clientX + 'px'
      r.style.top = e.clientY + 'px'
      document.body.appendChild(r)
      r.onanimationend = () => r.remove()
    }
    const loop = () => {
      x += (px - x) * 0.16
      y += (py - y) * 0.16
      ring.current.style.transform = `translate(${x}px,${y}px)`
      id = requestAnimationFrame(loop)
    }
    addEventListener('pointermove', move)
    addEventListener('pointerdown', down)
    loop()
    return () => {
      removeEventListener('pointermove', move)
      removeEventListener('pointerdown', down)
      cancelAnimationFrame(id)
    }
  }, [])
  return (
    <>
      <div id="cd" ref={dot} />
      <div id="cr" ref={ring} />
    </>
  )
}
