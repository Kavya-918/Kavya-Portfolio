import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
// import Certificates from './components/Certificates'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [focusedSection, setFocusedSection] = useState<null | 'home' | 'about' | 'technologies' | 'experience' | 'projects'>(null);
  console.log(focusedSection);
  return (
    <>
      <Header focused={null} onSelect={() => setFocusedSection(null)} onClear={() => setFocusedSection(null)} />
      <style>{`section{scroll-margin-top:80px}`}</style>
      <main>
        {true && (
          <>
            <Hero />
            <hr style={{ opacity: 0.25 }} />
            <About />
            <hr style={{ opacity: 0.25 }} />
            <Technologies />
            <hr style={{ opacity: 0.25 }} />
            <Experience />
            <hr style={{ opacity: 0.25 }} />
            <Projects />
          </>
        )}
        {/* focus mode disabled per request */}
        {/* Certificates removed as requested */}
      </main>
      <Footer />
    </>
  )
}

export default App
