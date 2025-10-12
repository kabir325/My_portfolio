'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { skills } from '@/data/skills';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 530);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className={`relative z-10 about-section min-h-screen ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          {/* Image Section */}
          <div className="image-section">
            <div className="relative group">
              <div className="w-[280px] h-[280px] relative">
                {/* Glowing ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 pulse-glow">
                  <div className="w-full h-full rounded-full bg-black p-2">
                    <Image
                      src="/prof.jpg"
                      alt="Kabir Sahu - Software Engineer"
                      fill
                      className="object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                      sizes="280px"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 gradient-text">
                  Kabir Sahu
                </h1>
                <p className="text-xl text-gray-300 mono">Software Engineer</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Section */}
          <div className={`text-section ${isVisible ? 'fade-in-up delay-200' : 'opacity-0'}`}>
            <div className="bg-black/40 backdrop-blur-xl border border-white/15 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></span>
                About Me
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                An enthusiastic and detail-oriented <span className="text-blue-400 font-semibold">Software Engineer </span> 
                with a strong foundation in programming, problem-solving, and software development best practices. 
                Passionate about building <span className="text-purple-400 font-semibold">efficient, scalable, and user-friendly applications </span> 
                 that create real-world impact.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mt-4">
                Skilled in <span className="mono text-green-400">Python, Java, C, and C++</span>, with hands-on experience 
                in database management and web development. Eager to explore emerging technologies, collaborate with 
                diverse teams, and contribute to innovative projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
          
          <div className="skills-box max-w-6xl mx-auto px-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.id} 
                className={`skill-box-enhanced ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Educational <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My academic background and achievements
            </p>
          </div>
          
          <div className="education-timeline-enhanced">
            <div className={`education-block-enhanced-dark ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-blue-400 font-semibold mono">2022 - 2026</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">BTech. in Computer Science</h3>
              <p className="text-lg text-gray-300 mb-2">PES University</p>
              <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold border border-green-500/30">
                CGPA: 8.11
              </div>
            </div>
            
            <div className={`education-block-enhanced-dark ${isVisible ? 'fade-in-up delay-200' : 'opacity-0'}`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-purple-400 font-semibold mono">2017 - 2020</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Senior Secondary (XII)</h3>
              <p className="text-lg text-gray-300 mb-2">The Radiant Way School</p>
              <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30">
                85.2%
              </div>
            </div>
            
            <div className={`education-block-enhanced-dark ${isVisible ? 'fade-in-up delay-400' : 'opacity-0'}`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-green-400 font-semibold mono">2015 - 2017</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Secondary (X)</h3>
              <p className="text-lg text-gray-300 mb-2">The Radiant Way School</p>
              <div className="inline-flex items-center px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold border border-purple-500/30">
                87.7%
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
