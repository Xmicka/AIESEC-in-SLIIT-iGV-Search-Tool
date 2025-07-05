
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Globe, Heart, Users } from 'lucide-react';

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const turtleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroSection = heroRef.current;
      const turtleSection = turtleRef.current;

      if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroSection.style.opacity = `${1 - scrolled / window.innerHeight}`;
      }

      if (turtleSection && scrolled > window.innerHeight * 0.3) {
        turtleSection.style.opacity = `${Math.min((scrolled - window.innerHeight * 0.3) / 300, 1)}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video Placeholder */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-blue-900 via-teal-800 to-green-800"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Make Your Impact
            <span className="block text-orange-400">Global</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join AIESEC's Global Volunteer program in Sri Lanka. 
            Create lasting change while discovering yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/projects"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Projects
            </Link>
            <Link 
              to="/experiences"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              See Experiences
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-white/70" />
        </div>
      </div>

      {/* Turtle Transition Section */}
      <div 
        ref={turtleRef}
        className="relative h-screen flex items-center justify-center opacity-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Every Journey
            <span className="block text-teal-400">Starts Here</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Discover the projects that will shape your global perspective
          </p>
          <Link 
            to="/projects"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Dive Into Projects
          </Link>
        </div>
      </div>

      {/* Impact Stats Section */}
      <div className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <Globe size={48} className="mx-auto mb-4 text-orange-400" />
              <h3 className="text-3xl font-bold mb-2">6+</h3>
              <p className="text-gray-300">Active Projects</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <Users size={48} className="mx-auto mb-4 text-teal-400" />
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-gray-300">Global Volunteers</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <Heart size={48} className="mx-auto mb-4 text-green-400" />
              <h3 className="text-3xl font-bold mb-2">17</h3>
              <p className="text-gray-300">SDG Goals Addressed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
