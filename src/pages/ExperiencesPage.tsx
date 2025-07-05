
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import ScrollSection from '../components/ScrollSection';

const ExperiencesPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      caption: "Teaching English to local children"
    },
    {
      url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
      caption: "Healthcare outreach program"
    },
    {
      url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      caption: "Environmental conservation work"
    },
    {
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      caption: "Wildlife protection initiatives"
    },
    {
      url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
      caption: "Exploring Sri Lankan landscapes"
    },
    {
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      caption: "Beach cleanup activities"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "Canada",
      flag: "🇨🇦",
      project: "Aquatica",
      quote: "My time in Sri Lanka completely changed my perspective on conservation. The local communities taught me as much as I taught them.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b780?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Marcus Weber",
      country: "Germany",
      flag: "🇩🇪",
      project: "Global Classroom",
      quote: "Teaching in rural schools showed me the universal language of learning. Every smile from a student made every challenge worth it.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Maria Santos",
      country: "Brazil",
      flag: "🇧🇷",
      project: "Green Leaders",
      quote: "Working on environmental projects in Sri Lanka inspired me to continue this work back home. The impact is lasting.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-20">
      {/* Header Section */}
      <div className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Stories That
            <span className="block text-teal-400">Inspire</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real experiences from real volunteers. See how AIESEC's Global Volunteer program 
            has transformed lives and communities across Sri Lanka.
          </p>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <ScrollSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Moments That <span className="text-teal-400">Matter</span>
            </h2>
          </ScrollSection>

          {/* Main Carousel */}
          <ScrollSection>
            <div className="relative max-w-4xl mx-auto mb-12">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src={galleryImages[currentImage].url}
                  alt={galleryImages[currentImage].caption}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => openLightbox(galleryImages[currentImage].url)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-medium">
                    {galleryImages[currentImage].caption}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </ScrollSection>

          {/* Thumbnail Grid */}
          <ScrollSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    currentImage === index ? 'ring-4 ring-teal-400 scale-105' : 'hover:scale-105'
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img 
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                  {currentImage !== index && (
                    <div className="absolute inset-0 bg-black/40"></div>
                  )}
                </div>
              ))}
            </div>
          </ScrollSection>
        </div>
      </div>

      {/* Video Testimonials Section */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <ScrollSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Hear From Our <span className="text-orange-400">Global Volunteers</span>
            </h2>
          </ScrollSection>

          {/* Featured Video */}
          <ScrollSection>
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-slate-700 rounded-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                  <div className="text-center">
                    <Play size={64} className="mx-auto mb-4 text-white/70" />
                    <p className="text-white/70 text-lg">
                      Video testimonials coming soon!
                    </p>
                    <p className="text-white/50 text-sm mt-2">
                      Placeholder for YouTube/Vimeo embed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollSection>

          {/* Written Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollSection key={testimonial.name}>
                <div className="bg-slate-700 p-8 rounded-2xl hover:bg-slate-600 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {testimonial.flag} {testimonial.country} • {testimonial.project}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X size={32} />
          </button>
          <img 
            src={lightboxImage}
            alt="Gallery item"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-teal-500 to-blue-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Your Story Starts Here
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Global Volunteers who have discovered their purpose through service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/projects"
              className="inline-block bg-white text-teal-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Browse Projects
            </a>
            <a 
              href="/contact"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-teal-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesPage;
