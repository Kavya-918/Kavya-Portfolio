import { useState } from 'react'
import { experience } from '../data/experience'
import AnimatedSection from './AnimatedSection'

function formatDate(iso: string | undefined): string {
  if (!iso || iso.toLowerCase() === 'present') return 'Present'
  const [y, m] = iso.split('-').map(Number)
  const date = new Date(y, (m || 1) - 1, 1)
  return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '3rem 0', textAlign: 'center' }}>
      <AnimatedSection direction="up" delay={0.1}>
        <h2 className="hl-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Experience</h2>
      </AnimatedSection>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'left' }}>
        {experience.map((_exp, idx) => (
          <AnimatedSection key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={0.2 + (idx * 0.1)}>
            <ExperienceCard index={idx} />
          </AnimatedSection>
        ))}
      </div>
      <style>{`
        /* Timeline column sizing on desktop */
        @media (min-width: 681px) {
          .exp-grid { display: grid; grid-template-columns: 240px 1fr; gap: 1rem; align-items: start; }
          .exp-left { text-align: right; padding-top: 6px; padding-right: 12px; border-right: 2px solid rgba(255,212,0,0.18); position: sticky; top: 70px; }
        }
        @media (max-width: 680px) {
          .exp-grid { display: grid; grid-template-columns: 1fr; gap: 0.5rem; }
          .exp-left { text-align: left; border-right: none; }
        }
        .date { font-weight: 700; color: #fff; }
        .role { color: rgba(255,255,255,0.92); }
        .company { color: rgba(255,255,255,0.8); }
        .chip { display:inline-block; padding: 2px 8px; border-radius: 999px; border:1px solid rgba(255,212,0,0.35); margin-right: 6px; margin-top: 6px; font-size: 12px; opacity: .95; background: rgba(255,212,0,0.07) }
        .card { border: 1px solid rgba(255,212,0,0.25); background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.25)); border-radius: 14px; padding: 1rem; box-shadow: 0 8px 22px rgba(0,0,0,.35) }
        .card h3 { margin: 0; font-size: 1.05rem; color: #fff; }
        .muted { opacity: .8 }
        .strong { font-weight: 700 }
        .toggle { background: rgba(255,212,0,0.08); border: 1px solid rgba(255,212,0,0.5); color: #fff; padding: 4px 10px; border-radius: 8px; cursor: pointer; font-size: 12px }
        .toggle:hover { background: rgba(255,212,0,0.15); }
      `}</style>
    </section>
  )
}

function ExperienceCard({ index }: { index: number }) {
  const exp = experience[index]
  return (
    <article className="exp-grid" style={{ marginBottom: '1rem' }}>
      <div className="exp-left">
        <div className="date" style={{ fontSize: '.95rem' }}>{formatDate(exp.start)} – {formatDate(exp.end)}</div>
        <div className="role">{exp.role}</div>
        <div className="company">{exp.company}</div>
      </div>
      <div>
        {(exp.projects ?? []).map((proj, pIdx) => (
          <ProjectCard key={pIdx} name={proj.name} bullets={proj.bullets} stack={proj.stack} />
        ))}
      </div>
    </article>
  )
}

function ProjectCard({ name, bullets, stack }: { name: string; bullets: string[]; stack: string[] }) {
  const [expanded, setExpanded] = useState(false)
  const visibleBullets = expanded ? bullets : bullets.slice(0, 3)
  return (
    <div className="card" style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
        <h3>{name}</h3>
        {bullets.length > 3 && (
          <button className="toggle" onClick={() => setExpanded(v => !v)}>{expanded ? 'Show less' : 'Show more'}</button>
        )}
      </div>
      <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
        {visibleBullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div style={{ marginTop: 8 }}>
        {stack.map((s, i) => (
          <span key={i} className="chip">{s}</span>
        ))}
      </div>
    </div>
  )
}


