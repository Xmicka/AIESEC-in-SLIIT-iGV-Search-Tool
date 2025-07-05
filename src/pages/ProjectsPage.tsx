
import React from 'react';
import { ExternalLink, Utensils, Home, Car } from 'lucide-react';
import ScrollSection from '../components/ScrollSection';

interface Project {
  name: string;
  url: string;
  description: string;
  sdgs: number[];
  image: string;
}

const ProjectsPage = () => {
  const projects: Project[] = [
    {
      name: "Aquatica",
      url: "https://aiesec.org/opportunity/global-volunteer/1309136",
      description: "Dive deep into marine conservation and sustainable water management projects",
      sdgs: [6, 14, 15],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Global Classroom",
      url: "https://aiesec.org/opportunity/global-volunteer/1316644",
      description: "Transform education through innovative teaching methods and cultural exchange",
      sdgs: [4, 10, 17],
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Heartbeat",
      url: "https://aiesec.org/opportunity/global-volunteer/1316713",
      description: "Healthcare initiatives focusing on community wellness and medical support",
      sdgs: [3, 10, 11],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Skill Up",
      url: "https://aiesec.org/opportunity/global-volunteer/1316643",
      description: "Empower communities through skills development and capacity building",
      sdgs: [4, 8, 10],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Green Leaders",
      url: "https://aiesec.org/opportunity/global-volunteer/1312929",
      description: "Environmental leadership through sustainable practices and climate action",
      sdgs: [13, 15, 17],
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Rooted",
      url: "https://aiesec.org/opportunity/global-volunteer/1312931",
      description: "Rural development and agricultural innovation for sustainable communities",
      sdgs: [1, 2, 15],
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const SDGIcon = ({ number }: { number: number }) => (
    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
      {number}
    </div>
  );

  return (
    <div className="pt-20">
      {/* Header Section */}
      <div className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Choose Your
            <span className="block text-orange-400">Adventure</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each project is a gateway to impact. Choose the cause that calls to your heart 
            and embark on a journey that will transform both you and the communities you serve.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollSection key={project.name}>
                <div className="group bg-slate-700 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* SDG Icons */}
                    <div className="flex gap-2 mb-4">
                      {project.sdgs.map(sdg => (
                        <SDGIcon key={sdg} number={sdg} />
                      ))}
                    </div>
                    
                    {/* Amenities */}
                    <div className="flex gap-4 mb-6 text-gray-400">
                      <div className="flex items-center gap-1">
                        <Utensils size={16} />
                        <span className="text-xs">Food</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Home size={16} />
                        <span className="text-xs">Stay</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Car size={16} />
                        <span className="text-xs">Transport</span>
                      </div>
                    </div>
                    
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 group-hover:shadow-lg"
                    >
                      Apply on AIESEC.org
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Make Your Mark?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait for the perfect moment. The world needs your unique perspective and passion.
          </p>
          <a 
            href="https://aiesec.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
