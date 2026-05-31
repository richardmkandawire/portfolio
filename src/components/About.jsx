import React from 'react'
import { Code, Palette, Zap } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable solutions'
    },
    {
      icon: <Palette size={24} />,
      title: 'Design Focus',
      description: 'Crafting beautiful user experiences'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Optimized for speed and efficiency'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Building the Future</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a passionate developer who loves creating memorable digital experiences. 
              With a keen eye for design and a commitment to writing clean code, I transform 
              ideas into reality.
            </p>
            <p className="about-description">
              My approach combines technical expertise with creative problem-solving, 
              ensuring every project not only works flawlessly but also delights users.
            </p>
          </div>

          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="highlight-icon">{item.icon}</div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About