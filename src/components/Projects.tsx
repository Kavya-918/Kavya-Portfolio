import { projects } from '../data/projects'
import AnimatedSection from './AnimatedSection'

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '3rem 0' }}>
      <AnimatedSection direction="up" delay={0.1}>
        <h2 className="hl-title">Projects</h2>
      </AnimatedSection>
      <style>{`
        a, a:visited { color: inherit; text-decoration: none; }
        a:focus, a:focus-visible { outline: none; }
        .view-btn {
          background: #ffb300; /* portfolio yellow */
          color: #000; /* dark text on yellow */
          border: 2px solid #ffb300;
          padding: 10px 16px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 120ms ease, background 160ms ease, color 160ms ease, border-color 160ms ease;
          box-shadow: none;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }
        .view-btn:hover, .view-btn:focus, .view-btn:focus-visible { background: transparent; color: #ffb300; transform: translateY(-1px); border-color: #ffffff; box-shadow: none; }
        .view-btn:active { transform: translateY(0); box-shadow: none; }
        .tag-chip { border: 1px solid rgba(255,179,0,0.45); color: #fff; padding: 2px 8px; border-radius: 999px; font-size: 12px; }
        @media (max-width: 820px) { .project-row { grid-template-columns: 1fr !important; } }
      `}</style>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {projects.map((p, idx) => (
          <AnimatedSection key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={0.2 + (idx * 0.1)}>
            <article className="project-row" style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '1rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
              {p.image ? (
                <>
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: p.title === 'Random Color Generator' ? 'linear-gradient(0deg, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0.18) 100%)' : 'linear-gradient(0deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.12) 100%)' }} />
                </>
              ) : (
                <div style={{ height: 160, borderRadius: 12, border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b0d14' }}>
                  <span>{p.title}</span>
                </div>
              )}
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ margin: '0 0 0.35rem 0' }}>{p.title}</h3>
              <p style={{ margin: 0, opacity: 0.95 }}>{p.summary}</p>
              <div style={{ marginTop: '0.6rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {p.tags.map((t, i) => (
                  <span key={i} className="tag-chip">{t}</span>
                ))}
              </div>
              {p.repo && (
                <div style={{ marginTop: '0.8rem' }}>
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    <button className="view-btn">Project Link</button>
                  </a>
                </div>
              )}
            </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}


