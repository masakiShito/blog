// src/components/blog/BlogHeader.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';

const BlogHeader: React.FC = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Home Button */}
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Portfolio</span>
            </button>

            {/* Blog Title - Desktop */}
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gray-800">
                MoroFuji Blog
              </h1>
            </div>

            {/* Profile and Menu Button */}
            <div className="flex items-center gap-4">
              <img
                src="/api/placeholder/32/32"
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-gray-200"
              />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden pt-16">
          <nav className="container mx-auto px-4 py-8">
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-800">
                  MoroFuji Blog
                </h1>
                <p className="text-gray-600 mt-2">
                  Web開発とデザインについての記録
                </p>
              </div>
              {/* Add more mobile menu items here if needed */}
            </div>
          </nav>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-16"></div>
    </>
  );
};

export default BlogHeader;