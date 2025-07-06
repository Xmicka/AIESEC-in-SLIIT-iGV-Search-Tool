
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Globe, Heart, Users, Play } from 'lucide-react';

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const turtleRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroSection = heroRef.current;
      const turtleSection = turtleRef.current;

      if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroSection.style.opacity = `${Math.max(0, 1 - scrolled / (window.innerHeight * 0.8))}`;
      }

      if (turtleSection && scrolled > window.innerHeight * 0.2) {
        const opacity = Math.min((scrolled - window.innerHeight * 0.2) / (window.innerHeight * 0.5), 1);
        turtleSection.style.opacity = `${opacity}`;
        turtleSection.style.transform = `translateY(${Math.max(0, 100 - scrolled * 0.1)}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if autoplay is blocked
        console.log('Autoplay blocked by browser');
      });
    }
  }, []);

  return (
    <div className="relative">
      {/* Hero Section with Video Background */}
      <div 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background - placeholder for now */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
          >
            {/* Placeholder - replace with your uploaded video */}
            <source src="/above_sri_lanka.mp4" type="video/mp4" />
            {/* Fallback background */}
            <div 
              className="w-full h-full bg-gradient-to-b from-blue-900 via-teal-800 to-green-800"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
              Make Your Impact
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Global
              </span>
            </h1>
            <p className="text-xl md:text-3xl mb-12 text-gray-100 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg">
              Join AIESEC's Global Volunteer program in Sri Lanka. 
              Create lasting change while discovering yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/projects"
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
              >
                <span className="flex items-center gap-3">
                  Explore Projects
                  <ArrowDown className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Link>
              <Link 
                to="/experiences"
                className="group border-3 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-5 rounded-full text-xl font-semibold transition-all duration-500 backdrop-blur-sm"
              >
                <span className="flex items-center gap-3">
                  <Play size={20} />
                  See Experiences
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/80">
            <ArrowDown size={24} className="stroke-2" />
            <span className="text-sm font-medium">Scroll to explore</span>
          </div>
        </div>
      </div>

      {/* Cinematic Turtle Transition Section */}
      <div 
        ref={turtleRef}
        className="relative h-[120vh] flex items-center justify-center opacity-0 transition-all duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="transform transition-all duration-1000">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-2xl">
              Every Journey
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Starts Here
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg">
              Discover the projects that will shape your global perspective and transform communities
            </p>
            <Link 
              to="/projects"
              className="group inline-block bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-12 py-6 rounded-full text-xl font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
            >
              <span className="flex items-center gap-3">
                Dive Into Projects
                <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
              </span>
            </Link>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Enhanced Impact Stats Section */}
      <div className="py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-teal-500/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Numbers that tell the story of transformation and global connection
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="group hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-8 rounded-3xl border border-orange-500/20 backdrop-blur-sm">
                <Globe size={64} className="mx-auto mb-6 text-orange-400 group-hover:rotate-12 transition-transform duration-500" />
                <h3 className="text-6xl font-bold mb-4 text-white">6+</h3>
                <p className="text-xl text-gray-300 font-medium">Active Projects</p>
                <p className="text-sm text-gray-400 mt-2">Across multiple SDGs</p>
              </div>
            </div>
            
            <div className="group hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 p-8 rounded-3xl border border-teal-500/20 backdrop-blur-sm">
                <Users size={64} className="mx-auto mb-6 text-teal-400 group-hover:scale-125 transition-transform duration-500" />
                <h3 className="text-6xl font-bold mb-4 text-white">500+</h3>
                <p className="text-xl text-gray-300 font-medium">Global Volunteers</p>
                <p className="text-sm text-gray-400 mt-2">From 50+ countries</p>
              </div>
            </div>
            
            <div className="group hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-3xl border border-green-500/20 backdrop-blur-sm">
                <Heart size={64} className="mx-auto mb-6 text-green-400 group-hover:pulse transition-all duration-500" />
                <h3 className="text-6xl font-bold mb-4 text-white">17</h3>
                <p className="text-xl text-gray-300 font-medium">SDG Goals</p>
                <p className="text-sm text-gray-400 mt-2">Making global impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
