import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const COL = {
  dark: { bg: '27,27,29', f: '245,245,245', a: '224,162,51' },
  light: { bg: '242,242,240', f: '22,22,24', a: '181,114,15' },
}


export default function Background() {
  const cv = useRef(null)
  const { theme } = useTheme()
  const th = useRef(theme)

  useEffect(() => {
    th.current = theme
    const c = cv.current
    const g = c.getContext('2d')
    g.fillStyle = `rgb(${COL[theme].bg})`
    g.fillRect(0, 0, c.width, c.height)
  }, [theme])

  useEffect(() => {
    const el = cv.current
    const c = el.getContext('2d')
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches
    let W, H, P, id
    let T = 0
    let fr = 0
    let mx = -999
    let my = -999
    const init = () => {
      W = el.width = innerWidth
      H = el.height = innerHeight
      P = Array.from({ length: Math.min(650, (W * H) / 2800) | 0 }, () => ({ x: Math.random() * W, y: Math.random() * H, a: Math.random() < 0.2 }))
      c.fillStyle = `rgb(${COL[th.current].bg})`
      c.fillRect(0, 0, W, H)
    }
    const frame = () => {
      if (still && fr++ > 80) return
      T += 0.0035
      const k = COL[th.current]
      c.fillStyle = `rgba(${k.bg},.09)`
      c.fillRect(0, 0, W, H)
      const sa = `rgba(${k.a},.75)`
      const sf = `rgba(${k.f},.17)`
      for (const p of P) {
        const a = Math.sin(p.x * 0.0031 + T * 3) * 2 + Math.cos(p.y * 0.0037 - T * 2) * 2 + Math.sin((p.x + p.y) * 0.0017 + T) * 1.5
        let vx = Math.cos(a)
        let vy = Math.sin(a)
        const dx = p.x - mx
        const dy = p.y - my
        const d = dx * dx + dy * dy
        if (d < 44100) {
          const f = (1 - d / 44100) * 5
          const l = Math.sqrt(d) || 1
          vx += (dx / l) * f
          vy += (dy / l) * f
        }
        const nx = p.x + vx * 1.15
        const ny = p.y + vy * 1.15
        c.strokeStyle = p.a ? sa : sf
        c.beginPath()
        c.moveTo(p.x, p.y)
        c.lineTo(nx, ny)
        c.stroke()
        p.x = nx
        p.y = ny
        if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
          p.x = Math.random() * W
          p.y = Math.random() * H
        }
      }
      id = requestAnimationFrame(frame)
    }
    const move = (e) => {
      mx = e.clientX
      my = e.clientY
    }
    init()
    frame()
    addEventListener('resize', init)
    addEventListener('pointermove', move)
    return () => {
      cancelAnimationFrame(id)
      removeEventListener('resize', init)
      removeEventListener('pointermove', move)
    }
  }, [])

  return <canvas id="bg" ref={cv} />
}
