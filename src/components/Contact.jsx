import React, { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Message sent! (This is a demo)')
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              Have a project in mind? Let's create something amazing together. 
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            
            <div className="contact-details">
              <div className="contact-detail">
                <Mail size={20} />
                <span>www.ntchindimkandawire@gmail.com</span>
              </div>
              <div className="contact-detail">
                <MapPin size={20} />
                <span>Zomba Domasi</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>

        <footer className="footer">
          <p>© 2024 Portfolio. Crafted with passion.</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact