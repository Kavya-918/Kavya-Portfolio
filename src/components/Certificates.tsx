import { certificates } from '../data/certificates'

export default function Certificates() {
  return (
    <section id="certificates" style={{ padding: '3rem 0' }}>
      <h2>Certificates</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {certificates.map((c, idx) => (
          <article key={idx} style={{ border: '1px solid #333', borderRadius: 8, padding: '1rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <strong>{c.title}</strong>
              <span>{c.issuer} · {c.year}</span>
            </div>
            {c.link && <div style={{ marginTop: '0.5rem' }}><a href={c.link} target="_blank"><button>View</button></a></div>}
          </article>
        ))}
      </div>
    </section>
  )
}


