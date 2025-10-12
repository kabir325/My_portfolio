'use client'
import React from 'react'
import { useState, useEffect } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden'>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Header Section */}
        <section className="relative z-10 py-20">
          <div className="text-center mb-16">
            <h1 className={`text-6xl md:text-7xl font-bold text-white mb-6 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto px-4 ${isVisible ? 'fade-in-up delay-200' : 'opacity-0'}`}>
              Let's collaborate and build something amazing together. 
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>
        </section>
        
        {/* Contact Content */}
        <section className="relative z-10 pb-20">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`contact-form-enhanced ${isVisible ? 'fade-in-up delay-300' : 'opacity-0'}`}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Send a Message</h2>
                <p className="text-gray-300">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>
              
              <form className="space-y-6" action="https://formsubmit.co/kabirsahu725@gmail.com" method="POST">
                <div className="form-group">
                  <label htmlFor='name' className='form-label-enhanced'>Full Name</label>
                  <input 
                    type='text' 
                    id='name' 
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    className='form-input-enhanced'
                    placeholder='Enter your full name'
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor='email' className='form-label-enhanced'>Email Address</label>
                  <input 
                    type='email' 
                    id='email' 
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='form-input-enhanced'
                    placeholder='your.email@example.com'
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor='phone' className='form-label-enhanced'>Phone Number</label>
                  <input 
                    type='tel' 
                    id='phone' 
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='form-input-enhanced'
                    placeholder='+91 XXXXX XXXXX'
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor='message' className='form-label-enhanced'>Message</label>
                  <textarea 
                    id='message' 
                    name='message'
                    rows={5} 
                    value={formData.message}
                    onChange={handleInputChange}
                    className='form-input-enhanced resize-none'
                    placeholder='Tell me about your project or just say hello!'
                    required
                  ></textarea>
                </div>
                
                <button 
                  type='submit' 
                  className='submit-button-enhanced w-full group'
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className={`contact-info-enhanced ${isVisible ? 'fade-in-up delay-400' : 'opacity-0'}`}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300">Here's how you can reach me directly.</p>
              </div>
              
              <div className='space-y-8'>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className='contact-heading'>Location</h3>
                    <p className='contact-text'>
                      H-404, Smondo 3<br />
                      Bangalore, Karnataka 560100<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className='contact-heading'>Email</h3>
                    <a href='mailto:kabirsahu725@gmail.com' className='contact-link'>
                      kabirsahu725@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className='contact-heading'>Phone</h3>
                    <a href='tel:+917587109160' className='contact-link'>
                      +91 75871 09160
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className='contact-heading'>Social Links</h3>
                    <div className="social-links-enhanced">
                      <a href='https://www.linkedin.com/in/kabir-sahu-b7401b208/' className='social-link' title="LinkedIn">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href='https://github.com/kabir325' className='social-link' title="GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.879.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href='https://wa.me/7587109160?text=' className='social-link' title="WhatsApp">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.471-.15-.67.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
};