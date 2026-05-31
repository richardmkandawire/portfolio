import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 75 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'SQL', level: 70 }
      ]
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'Tkinter', level: 85 },
        { name: 'Django', level: 70 },
        { name: 'Flask', level: 65 },
        { name: 'Bootstrap', level: 75 }
      ]
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'SQLite', level: 85 },
        { name: 'Git & GitHub', level: 88 },
        { name: 'VS Code', level: 90 }
      ]
    },
    {
      category: 'Core Skills',
      skills: [
        { name: 'GUI Development', level: 85 },
        { name: 'Database Design', level: 80 },
        { name: 'SMTP Integration', level: 75 },
        { name: 'System Architecture', level: 78 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & Tools</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className="skill-category"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills