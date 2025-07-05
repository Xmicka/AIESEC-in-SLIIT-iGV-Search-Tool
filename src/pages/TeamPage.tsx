
import React, { useState } from 'react';
import { Users, Mail, MessageCircle, Crown, Star } from 'lucide-react';
import ScrollSection from '../components/ScrollSection';

interface TeamMember {
  name: string;
  role: string;
}

interface VicePresident {
  name: string;
  title: string;
  department: string;
}

const TeamPage = () => {
  const [activeSection, setActiveSection] = useState(0);

  const vicePresidents: VicePresident[] = [
    { 
      name: "Savinu", 
      title: "LCVP iGV IR & M",
      department: "International Relations & Matching"
    },
    { 
      name: "Minol", 
      title: "LCVP iGV B2B & VD",
      department: "Business to Business & Volunteer Development"
    }
  ];

  const b2bVdTeam: TeamMember[] = [
    { name: "Janindu", role: "VD Manager" },
    { name: "Senaya", role: "B2B Manager" },
    { name: "Omali", role: "B2B Team Leader" },
    { name: "Yenuel", role: "B2B Team Leader" },
    { name: "Yeshan", role: "VD Team Leader" },
    { name: "Nisalma", role: "VD Team Leader" }
  ];

  const irMTeam: TeamMember[] = [
    { name: "Dhanushi", role: "Matching Specialist" },
    { name: "Savandi", role: "IR Specialist" },
    { name: "Elishiya", role: "Matching Manager" },
    { name: "Dahamya", role: "IR Manager" },
    { name: "Chathuni", role: "Audit Coordinator" },
    { name: "Yohan", role: "Campaign Coordinator" },
    { name: "Hashini", role: "Senior Matching Team Leader" },
    { name: "Dinidi", role: "Matching Team Leader" },
    { name: "Monali", role: "IR Team Leader" },
    { name: "Kavini", role: "IR Team Leader" }
  ];

  const VPCard = ({ vp, index }: { vp: VicePresident; index: number }) => (
    <ScrollSection>
      <div className="group relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-3xl hover:from-slate-700 hover:to-slate-600 transition-all duration-700 transform hover:scale-105 border border-orange-500/30 hover:border-orange-400/50">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
        
        <div className="relative z-10">
          {/* Crown icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Crown size={36} className="text-white" />
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
              {vp.name}
            </h3>
            <p className="text-xl font-semibold text-orange-400 mb-3">
              {vp.title}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              {vp.department}
            </p>
          </div>
          
          {/* Floating stars */}
          <div className="absolute top-4 right-4">
            <Star size={16} className="text-orange-400/60 animate-pulse" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Star size={12} className="text-yellow-400/40 animate-pulse delay-500" />
          </div>
        </div>
      </div>
    </ScrollSection>
  );

  const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => (
    <div className="group bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300">
        {member.name.charAt(0)}
      </div>
      <h3 className="text-white font-semibold text-lg text-center mb-2">
        {member.name}
      </h3>
      <p className="text-gray-400 text-center text-sm">
        {member.role}
      </p>
    </div>
  );

  return (
    <div className="pt-20">
      {/* Header Section */}
      <div className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollSection>
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              Meet Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Dream Team
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The passionate leaders making AIESEC's Global Volunteer program possible. 
              Each member brings unique expertise and unwavering dedication to creating life-changing experiences.
            </p>
          </ScrollSection>
        </div>
      </div>

      {/* Vice Presidents Section */}
      <div className="py-32 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <ScrollSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Executive <span className="text-orange-400">Leadership</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet our Vice Presidents leading the Global Volunteer initiatives with vision and dedication
              </p>
            </div>
          </ScrollSection>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {vicePresidents.map((vp, index) => (
              <VPCard key={vp.name} vp={vp} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Team Navigation */}
      <div className="bg-slate-900 border-b border-slate-700">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveSection(0)}
                className={`py-6 px-8 font-semibold text-lg transition-all duration-300 border-b-3 ${
                  activeSection === 0 
                    ? 'text-orange-400 border-orange-400' 
                    : 'text-gray-400 border-transparent hover:text-white hover:border-gray-600'
                }`}
              >
                B2B & VD Team
              </button>
              <button
                onClick={() => setActiveSection(1)}
                className={`py-6 px-8 font-semibold text-lg transition-all duration-300 border-b-3 ${
                  activeSection === 1 
                    ? 'text-orange-400 border-orange-400' 
                    : 'text-gray-400 border-transparent hover:text-white hover:border-gray-600'
                }`}
              >
                IR & M Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Team Sections */}
      <div className="py-32 bg-slate-900">
        <div className="container mx-auto px-6">
          {/* B2B & VD Team */}
          {activeSection === 0 && (
            <ScrollSection>
              <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  B2B & VD Team
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our Business-to-Business and Volunteer Development specialists ensure 
                  seamless partnerships and exceptional volunteer experiences.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {b2bVdTeam.map((member, index) => (
                  <TeamCard key={member.name} member={member} index={index} />
                ))}
              </div>
            </ScrollSection>
          )}

          {/* IR & M Team */}
          {activeSection === 1 && (
            <ScrollSection>
              <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  IR & M Team
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our International Relations and Matching experts connect global volunteers 
                  with perfect opportunities and provide ongoing support.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {irMTeam.map((member, index) => (
                  <TeamCard key={member.name} member={member} index={index} />
                ))}
              </div>
            </ScrollSection>
          )}
        </div>
      </div>

      {/* Leadership Values Section */}
      <div className="py-32 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <ScrollSection>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-white">
              What Drives <span className="text-teal-400">Our Team</span>
            </h2>
          </ScrollSection>

          <div className="grid md:grid-cols-3 gap-12">
            <ScrollSection>
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-8 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Users size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">Community First</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We believe in the power of community to create lasting change and meaningful connections across cultures.
                </p>
              </div>
            </ScrollSection>

            <ScrollSection>
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full mx-auto mb-8 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Mail size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">Excellence</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Every interaction, every project, every experience is crafted with attention to detail and unwavering care.
                </p>
              </div>
            </ScrollSection>

            <ScrollSection>
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-8 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">Global Impact</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our work extends beyond borders, creating ripples of positive change across the world.
                </p>
              </div>
            </ScrollSection>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="container mx-auto px-6 text-center">
          <ScrollSection>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white drop-shadow-2xl">
              Want to Join Our Team?
            </h2>
            <p className="text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
              AIESEC is always looking for passionate individuals to join our leadership team 
              and help shape the future of global volunteering.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-white text-purple-500 px-12 py-6 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
            >
              Get In Touch
            </a>
          </ScrollSection>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
