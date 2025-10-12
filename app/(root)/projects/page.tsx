'use client'
import { useState, useEffect } from 'react';
import { projectsData } from '@/data/projects';
import { currentProjectsData } from '@/data/currentProjects';

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

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
              Completed <span className="gradient-text">Projects</span>
            </h1>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto px-4 ${isVisible ? 'fade-in-up delay-200' : 'opacity-0'}`}>
              A collection of projects showcasing my skills in software development, 
              from embedded systems to web applications and machine learning
            </p>
          </div>
        </section>
        
        {/* Completed Projects Section */}
        <section className='relative z-10 pb-20'>
          <div className='max-w-7xl mx-auto px-8'>  
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {projectsData.length > 0 ? (
                projectsData.map((project, index) => (
                  <div 
                    key={project.id}
                    className={`project-card-enhanced group ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  >
                    <div className="relative h-full">
                      {/* Project content */}
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {project.name}
                          </h3>
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <span className="text-green-400 text-sm font-semibold">Completed</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed mb-6 text-base">
                          {project.description}
                        </p>
                        
                        {/* Tech Stack */}
                        {project.techStack && (
                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech, techIndex) => (
                                <span 
                                  key={tech} 
                                  className="tech-item-enhanced"
                                  style={{ animationDelay: `${techIndex * 0.1}s` }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Action Buttons */}
                        <div className="flex gap-4 mt-auto relative z-10">
                          <a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex-1"
                          >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                            View Code
                          </a>
                          {project.deploymentLink && (
                            <a 
                              href={project.deploymentLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary flex-1"
                            >
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                      
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-2xl text-gray-400">No completed projects found</p>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* Currently Working On Section */}
        <section className='relative z-10 pb-20'>
          <div className='max-w-7xl mx-auto px-8'>
            <div className="text-center mb-12">
              <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${isVisible ? 'fade-in-up delay-300' : 'opacity-0'}`}>
                Currently <span className="gradient-text">Working On</span>
              </h2>
              <p className={`text-lg text-gray-300 max-w-2xl mx-auto ${isVisible ? 'fade-in-up delay-400' : 'opacity-0'}`}>
                Projects in active development and ongoing improvements
              </p>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20'>
              {currentProjectsData.length > 0 ? (
                currentProjectsData.map((project, index) => (
                  <div 
                    key={project.id}
                    className={`project-card-enhanced group ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${(index + 0.5) * 0.1}s` }}
                  >
                    <div className="relative h-full">
                      {/* Project content */}
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {project.name}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                            <span className="text-yellow-400 text-sm font-semibold">{project.status}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed mb-6 text-base">
                          {project.description}
                        </p>
                        
                        {/* Tech Stack */}
                        {project.techStack && (
                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech, techIndex) => (
                                <span 
                                  key={tech} 
                                  className="tech-item-enhanced"
                                  style={{ animationDelay: `${techIndex * 0.1}s` }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Action Buttons */}
                        <div className="flex gap-4 mt-auto relative z-10">
                          {project.githubLink ? (
                            <a 
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary flex-1"
                            >
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                              </svg>
                              View Code
                            </a>
                          ) : (
                            <div className="btn-disabled flex-1">
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                              </svg>
                              Private Repository
                            </div>
                          )}
                          {project.deploymentLink && (
                            <a 
                              href={project.deploymentLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary flex-1"
                            >
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                      
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-2xl text-gray-400">No current projects found</p>
                </div>
              )}
            </div>
          </div>
        </section>

        
        
      </section>
    </>
  )
}