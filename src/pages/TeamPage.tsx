
import React, { useState } from 'react';
import { Users, Mail, MessageCircle } from 'lucide-react';
import ScrollSection from '../components/ScrollSection';

interface TeamMember {
  name: string;
  role: string;
}

const TeamPage = () => {
  const [activeSection, setActiveSection] = useState(0);

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

  const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => (
    <div className="group bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
      <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
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
      <div className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Our
            <span className="block text-orange-400">Dream Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The passionate leaders making AIESEC's Global Volunteer program possible. 
            Each member brings unique expertise and unwavering dedication to creating life-changing experiences.
          </p>
        </div>
      </div>

      {/* Team Navigation */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveSection(0)}
                className={`py-4 px-6 font-semibold transition-all duration-300 border-b-2 ${
                  activeSection === 0 
                    ? 'text-orange-400 border-orange-400' 
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
              >
                B2B & VD Team
              </button>
              <button
                onClick={() => setActiveSection(1)}
                className={`py-4 px-6 font-semibold transition-all duration-300 border-b-2 ${
                  activeSection === 1 
                    ? 'text-orange-400 border-orange-400' 
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
              >
                IR & M Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Team Sections */}
      <div className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          {/* B2B & VD Team */}
          {activeSection === 0 && (
            <ScrollSection>
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold mb-4 text-white">
                  B2B & VD Team
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
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
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold mb-4 text-white">
                  IR & M Team
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
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
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <ScrollSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              What Drives <span className="text-teal-400">Our Team</span>
            </h2>
          </ScrollSection>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollSection>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Community First</h3>
                <p className="text-gray-300">
                  We believe in the power of community to create lasting change and meaningful connections.
                </p>
              </div>
            </ScrollSection>

            <ScrollSection>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Mail size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Excellence</h3>
                <p className="text-gray-300">
                  Every interaction, every project, every experience is crafted with attention to detail and care.
                </p>
              </div>
            </ScrollSection>

            <ScrollSection>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Global Impact</h3>
                <p className="text-gray-300">
                  Our work extends beyond borders, creating ripples of positive change across the world.
                </p>
              </div>
            </ScrollSection>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            AIESEC is always looking for passionate individuals to join our leadership team 
            and help shape the future of global volunteering.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
