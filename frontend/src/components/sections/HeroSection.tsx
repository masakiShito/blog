import React from 'react';
import Typed from 'react-typed';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/api/placeholder/1200/800)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center px-16">
          <div className="text-white">
            <h1 className="text-6xl font-bold mb-4">MoroFuji</h1>
            <p className="text-2xl">
              I'm <span className="text-green-500">
                <Typed
                  strings={['System engineer']}
                  typeSpeed={120}
                  backSpeed={100}
                  loop
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
