import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'GUI Email Sender Application',
      description: 'A user-friendly desktop application for sending emails with an intuitive graphical interface',
      tags: ['Python', 'GUI', 'SMTP'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      github: 'https://github.com/richardmkandawire/GUI-Email-Sender-Application',
      demo: 'https://github.com/richardmkandawire/GUI-Email-Sender-Application'
    },
    {
      title: 'Inventory Control System',
      description: 'A comprehensive system for managing inventory, tracking stock levels, and generating reports',
      tags: ['Python', 'Database', 'Management'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      github: 'https://github.com/richardmkandawire/Inventory-Control-System',
      demo: 'https://github.com/richardmkandawire/Inventory-Control-System'
    },
    {
      title: 'Student Management System',
      description: 'An educational platform for managing student records, grades, and academic information',
      tags: ['Web Dev', 'Database', 'Education'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      github: 'https://github.com/DMI-BSC-15/student-management-system',
      demo: 'https://github.com/DMI-BSC-15/student-management-system'
    },
    {
      title: 'Dream Gadget Store',
      description: 'An e-commerce website for selling gadgets, featuring a user-friendly interface and secure payment options',
      tags: ['Html', 'Css', 'Python'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      github: 'https://github.com/richardmkandawire/Dream-Gadget-Store',
      demo: 'https://github.com/richardmkandawire/Dream-Gadget-Store'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Selected Works</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-image" style={{ background: project.gradient }}>
                <div className="project-overlay">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    title="View Project"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    title="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects