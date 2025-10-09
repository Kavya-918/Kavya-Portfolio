import AnimatedSection from './AnimatedSection'

type Tech = { name: string; className: string; color?: string }

const technologies: Tech[] = [
    { name: 'Java', className: 'devicon-java-plain colored' },
    { name: 'Spring', className: 'devicon-spring-plain colored' },
    { name: 'Spring Boot', className: 'devicon-spring-plain-wordmark colored' },
    { name: 'MySQL', className: 'devicon-mysql-plain colored' },
    { name: 'HTML5', className: 'devicon-html5-plain colored' },
    { name: 'CSS3', className: 'devicon-css3-plain colored' },
    { name: 'JavaScript', className: 'devicon-javascript-plain colored' },
    { name: 'React', className: 'devicon-react-original colored' }
]

export default function Technologies() {
	return (
		<section id="technologies" style={{ padding: '3rem 0' }}>
			<AnimatedSection direction="up" delay={0.1}>
				<h2 className="hl-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Technologies</h2>
			</AnimatedSection>
			{/* Professional floating animation with multiple layers */}
			<style>
                {`
                @keyframes techFloat {
                    0% { 
                        transform: translateY(0) rotate(0deg);
                        filter: brightness(1) drop-shadow(0 6px 18px rgba(0,0,0,0.35));
                    }
                    25% { 
                        transform: translateY(-10.4px) rotate(-1.3deg);
                        filter: brightness(1.05) drop-shadow(0 8px 24px rgba(0,0,0,0.4));
                    }
                    50% { 
                        transform: translateY(0) rotate(0deg);
                        filter: brightness(1) drop-shadow(0 6px 18px rgba(0,0,0,0.35));
                    }
                    75% { 
                        transform: translateY(7.8px) rotate(1.3deg);
                        filter: brightness(0.95) drop-shadow(0 4px 12px rgba(0,0,0,0.3));
                    }
                    100% { 
                        transform: translateY(0) rotate(0deg);
                        filter: brightness(1) drop-shadow(0 6px 18px rgba(0,0,0,0.35));
                    }
                }
                
                @keyframes techGlow {
                    0%, 100% { 
                        box-shadow: 0 6px 18px rgba(0,0,0,0.35), 0 0 0 rgba(255,255,255,0.1);
                    }
                    50% { 
                        box-shadow: 0 8px 24px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.15);
                    }
                }
                
                @keyframes techEntrance {
                    0% { 
                        opacity: 0;
                        transform: translateY(30px) scale(0.8);
                    }
                    100% { 
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                
                .tech-card {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                }
                
                .tech-card:hover {
                    transform: translateY(-12px) scale(1.05) !important;
                    box-shadow: 0 12px 32px rgba(0,0,0,0.5), 0 0 30px rgba(255,255,255,0.2) !important;
                    filter: brightness(1.1) !important;
                }
                
                .tech-card:active {
                    transform: translateY(-8px) scale(1.02) !important;
                }
                
                @media (prefers-reduced-motion: reduce) {
                    .tech-card { 
                        animation: none !important;
                        transform: none !important;
                    }
                    .tech-card:hover {
                        transform: translateY(-4px) scale(1.02) !important;
                    }
                }
                
                @media (max-width: 768px) {
                    .tech-card {
                        animation-duration: 4s !important;
                    }
                }
                `}
			</style>
			<AnimatedSection direction="up" delay={0.2}>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '1rem',
						justifyContent: 'center',
						width: '100%'
					}}
				>
					{technologies.map((t, i) => (
						<AnimatedSection key={t.name} direction={i % 2 === 0 ? 'left' : 'right'} delay={0.3 + (i * 0.1)}>
							<div
								className="tech-card"
								style={{
									width: 108,
									height: 108,
									borderRadius: 16,
									border: '2px solid rgba(255,255,255,0.15)',
									background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.2)), #1f1f1f',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
									willChange: 'transform, filter, box-shadow',
									animation: `techFloat 4s cubic-bezier(0.4, 0, 0.6, 1) infinite, techGlow 6s ease-in-out infinite`,
									animationDelay: `${i * 0.1}s, ${i * 0.1}s`,
									backfaceVisibility: 'hidden',
									perspective: '1000px'
								}}
								title={t.name}
								role="button"
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										// Add focus effect
									}
								}}
							>
								{t.name === 'Spring Boot' ? (
									<svg width="72" height="72" viewBox="0 0 56 56" aria-label="Spring Boot">
										<title>Spring Boot</title>
										<g transform="translate(8 8)">
											<polygon points="20,2 34,10 34,26 20,34 6,26 6,10" fill="#6DB33F"/>
											<path d="M20 10 v9" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round"/>
											<path d="M27 19 a7 7 0 1 1 -14 0" stroke="#ffffff" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
										</g>
									</svg>
								) : (
									<i className={t.className} style={{ fontSize: 56 }} />
								)}
							</div>
						</AnimatedSection>
					))}
				</div>
			</AnimatedSection>
		</section>
	)
}


