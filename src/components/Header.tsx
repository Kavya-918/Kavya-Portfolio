import { useEffect, useState } from 'react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  // { id: 'certificates', label: 'Certificates' }
]

export default function Header({ focused, onSelect, onClear }: { focused?: string | null, onSelect?: (id: string) => void, onClear?: () => void }) {
  console.log(onSelect);
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      let current = 'home'
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = s.id
          break
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', handler)
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const onNavClick = (id: string) => {
    // Always show all sections; just scroll to the requested one
    if (onClear) onClear()
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(6px)' }}>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem' }}>
        <div style={{ fontWeight: 700 }}>Kavya</div>
        <button aria-label="Menu" onClick={() => setOpen(!open)} style={{ display: 'none' }} id="menu-btn">☰</button>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {sections.map(s => (
            <li key={s.id}>
              <button
                onClick={() => onNavClick(s.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: (focused ? focused === s.id : active === s.id) ? '#ffb300' : 'inherit',
                  cursor: 'pointer',
                  fontWeight: (focused ? focused === s.id : active === s.id) ? 700 : 500
                }}
              >{s.label}</button>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {focused && (
            <button onClick={onClear} style={{ border: '1px solid #444', background: 'transparent', color: 'inherit', padding: '6px 10px', borderRadius: 6, cursor: 'pointer' }}>Show All</button>
          )}
        </div>
      </nav>
    </header>
  )
}


