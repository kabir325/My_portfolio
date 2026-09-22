'use client'
import Link from 'next/link';
import { useEffect } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div 
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 h-full w-64 bg-gray-950 border-l border-white/10 text-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5">
          <button onClick={onClose} aria-label="Close menu" className="absolute top-3 right-3 p-2 rounded-lg hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col space-y-4 mt-8">
            <Link href="/" className="text-lg text-gray-200 hover:text-blue-400" onClick={onClose}>About</Link>
            <Link href="/projects" className="text-lg text-gray-200 hover:text-blue-400" onClick={onClose}>Projects</Link>
            <Link href="/contact" className="text-lg text-gray-200 hover:text-blue-400" onClick={onClose}>Contact Me</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
