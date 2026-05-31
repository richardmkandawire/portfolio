import React from 'react'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-badge">Available for Work</div>
        <h1 className="hero-title">
          <span className="title-line">Creative</span>
          <span className="title-line highlight">Developer</span>
        </h1>
        <p className="hero-subtitle">
          Crafting exceptional digital experiences with precision and passion
        </p>
        <button 
          className="hero-cta"
          onClick={() => scrollToSection('projects')}
        >
          View Work
          <ArrowDown size={20} />
        </button>
      </div>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  )
}

export default Hero