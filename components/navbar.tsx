'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from './sidebar';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="navbar">
        <nav className="logo">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">Kabir Sahu</span>
          </Link>
          <div className="nav-links">
            {isMobile ? (
              <button 
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open menu"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            ) : (
              <>
                <Link 
                  href="/" 
                  className={`nav-link ${isActive('/') ? 'text-blue-400' : ''}`}
                >
                  About
                </Link>
                <Link 
                  href="/projects" 
                  className={`nav-link ${isActive('/projects') ? 'text-blue-400' : ''}`}
                >
                  Projects
                </Link>
                <Link 
                  href="/contact" 
                  className={`nav-link ${isActive('/contact') ? 'text-blue-400' : ''}`}
                >
                  Contact
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
