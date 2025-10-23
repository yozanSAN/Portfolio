import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      // Default to light mode
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Add transition class to coordinate all elements
    document.documentElement.classList.add('dark-mode-transition');
    
    // Small delay to ensure transition class is applied
    setTimeout(() => {
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }, 10);
    
    // Remove transition class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove('dark-mode-transition');
    }, 400);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-slate-800 dark:text-white" style={{ fontFamily: 'Oleo Script, cursive' }}>Portfolio</div>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#home" className="text-blue-500 dark:text-blue-400 font-medium hover:text-blue-600 dark:hover:text-blue-300 transition">
            Home
          </a>
          <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition">
            About
          </a>
          <a href="#services" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition">
            Services
          </a>
          <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-600 ease-out"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500 transition-all duration-600 ease-out" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600 transition-all duration-600 ease-out" />
            )}
          </button>
          <button 
            onClick={scrollToContact}
            className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-sm hover:bg-slate-50 dark:hover:bg-slate-800 dark:text-white transition"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;