
import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollSection from '../components/ScrollSection';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in volunteering with AIESEC in SLIIT. Can I learn more?"
  );

  return (
    <div className="pt-20">
      {/* Header Section */}
      <div className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Start
            <span className="block text-green-400">Your Journey</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to make a global impact? Have questions about our programs? 
            We're here to help you take the first step toward an unforgettable experience.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <ScrollSection>
              <div>
                <h2 className="text-4xl font-bold mb-8 text-white">
                  Get In <span className="text-green-400">Touch</span>
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Our team is ready to answer your questions and help you find the perfect 
                  volunteer opportunity. Choose your preferred way to connect:
                </p>

                {/* WhatsApp CTA */}
                <div className="bg-green-500 hover:bg-green-600 rounded-2xl p-6 mb-8 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <a 
                    href={`https://wa.me/94771234567?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white"
                  >
                    <MessageCircle size={32} className="mr-4" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">Chat on WhatsApp</h3>
                      <p className="text-green-100">Get instant answers to your questions</p>
                    </div>
                  </a>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-center text-gray-300">
                    <Mail size={24} className="mr-4 text-orange-400" />
                    <div>
                      <h4 className="font-semibold text-white">Email Us</h4>
                      <p>igv@aiesec.sliit.lk</p>
                      <p>contact@aiesec.sliit.lk</p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Phone size={24} className="mr-4 text-teal-400" />
                    <div>
                      <h4 className="font-semibold text-white">Call Us</h4>
                      <p>+94 77 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <MapPin size={24} className="mr-4 text-purple-400" />
                    <div>
                      <h4 className="font-semibold text-white">Visit Us</h4>
                      <p>SLIIT Campus, New Kandy Road,<br />Malabe, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollSection>

            {/* Contact Form */}
            <ScrollSection>
              <div className="bg-slate-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-600 border border-slate-500 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none transition-colors peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-3 text-gray-400 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-orange-400 peer-focus:text-sm peer-focus:bg-slate-700 peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-orange-400 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-slate-700 peer-[:not(:placeholder-shown)]:px-2">
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-600 border border-slate-500 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none transition-colors peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-3 text-gray-400 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-orange-400 peer-focus:text-sm peer-focus:bg-slate-700 peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-orange-400 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-slate-700 peer-[:not(:placeholder-shown)]:px-2">
                      Your Email
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-slate-600 border border-slate-500 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none transition-colors peer resize-none"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-3 text-gray-400 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-orange-400 peer-focus:text-sm peer-focus:bg-slate-700 peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-orange-400 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-slate-700 peer-[:not(:placeholder-shown)]:px-2">
                      Your Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </ScrollSection>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <ScrollSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Quick <span className="text-green-400">Answers</span>
            </h2>
          </ScrollSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollSection>
              <div className="bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-white">How long are the programs?</h3>
                <p className="text-gray-300">
                  Our Global Volunteer programs typically range from 6-8 weeks, giving you enough time to make a real impact.
                </p>
              </div>
            </ScrollSection>

            <ScrollSection>
              <div className="bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-white">What's included?</h3>
                <p className="text-gray-300">
                  Most programs include accommodation, meals, local transportation, and full support from our local team.
                </p>
              </div>
            </ScrollSection>

            <ScrollSection>
              <div className="bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-white">Who can apply?</h3>
                <p className="text-gray-300">
                  Anyone aged 18-30 with passion for making a difference! No specific qualifications required for most programs.
                </p>
              </div>
            </ScrollSection>

            <ScrollSection>
              <div className="bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-white">When can I start?</h3>
                <p className="text-gray-300">
                  We have multiple intake periods throughout the year. Contact us to find the next available opportunity.
                </p>
              </div>
            </ScrollSection>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-gradient-to-r from-green-500 to-teal-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Your Adventure Awaits
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't let this opportunity pass by. The world is waiting for your unique contribution.
          </p>
          <a 
            href={`https://wa.me/94771234567?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle size={24} />
            Start Chatting Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
