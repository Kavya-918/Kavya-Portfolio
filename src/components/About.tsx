import AnimatedSection from './AnimatedSection'

export default function About() {
	return (
		<section id="about" style={{ padding: '3rem 0' }}>
			<AnimatedSection direction="up" delay={0.1}>
				<h2 className="hl-title" style={{ marginBottom: '1.5rem' }}>About Me</h2>
			</AnimatedSection>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 2fr',
					gap: '2rem',
					alignItems: 'start',
					maxWidth: 1100,
					margin: '0 auto'
				}}
			>
				<AnimatedSection direction="left" delay={0.2}>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<img
							src="/KavyaProfile.jpg"
							alt="Kavya portrait"
							style={{
								width: '300px',
								height: '400px',
								objectFit: 'cover',
								borderRadius: '12px',
								boxShadow: '0 10px 25px rgba(0,0,0,0.35)',
								border: '2px solid #ffb300'
							}}
						/>
					</div>
				</AnimatedSection>
				<AnimatedSection direction="right" delay={0.3}>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<p>
							I am a Software Developer with industry experience in building secure and scalable web applications. My expertise lies in Java (Core, Advanced, JDBC), Hibernate, Spring, and Spring Boot, along with proficiency in frontend technologies like HTML, CSS, and JavaScript. I also have hands-on experience with MySQL for database design and management. I am proficient with modern developer tools such as VS Code, GitHub, Postman, Eclipse, IntelliJ, and Spring Tool Suite, which streamline my workflow and productivity. Passionate about problem-solving and continuous learning, I thrive in collaborative, fast-paced environments and aim to deliver impactful solutions that combine security, efficiency, and innovation.
						</p>
					</div>
				</AnimatedSection>
			</div>
		</section>
	)
}


