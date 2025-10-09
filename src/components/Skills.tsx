import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '3rem 0' }}>
      <h2>Skills</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {skillGroups.map((g, idx) => (
          <article key={idx} style={{ border: '1px solid #333', borderRadius: 8, padding: '1rem', textAlign: 'left' }}>
            <h3 style={{ marginTop: 0 }}>{g.title}</h3>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {g.skills.map((s, i) => (
                <span key={i} style={{ border: '1px solid #555', padding: '2px 8px', borderRadius: 999 }}>{s}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}


