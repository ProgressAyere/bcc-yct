import React, { useState } from 'react';
import { Mail, User, School, Briefcase, MessageSquare, Send } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Contact = () => {
  const [joinForm, setJoinForm] = useState({ name: '', email: '', campus: '', interest: '' });
  const [enquiryForm, setEnquiryForm] = useState({ name: '', email: '', subject: '', message: '' });

  const interests = ['Blockchain Fundamentals', 'Smart Contracts', 'DeFi', 'NFTs', 'Web3 Development', 'Community Building'];
  const enquiryTypes = ['Partnership Opportunity', 'Event Collaboration', 'Media Enquiry', 'General Question'];

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    console.log('Join Form:', joinForm);
    alert('Thank you for joining BCC! We\'ll be in touch soon.');
    setJoinForm({ name: '', email: '', campus: '', interest: '' });
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry Form:', enquiryForm);
    alert('Thank you for reaching out! We\'ll respond to your enquiry shortly.');
    setEnquiryForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join & Connect</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Become part of our growing blockchain education community or reach out to explore partnership opportunities.
          </p>
        </div>
      </section>

      {/* Why Join BCC */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">Why Join BCC?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Learn & Grow</h3>
              <p className="text-dark">Access hands-on blockchain education, workshops, and mentorship from industry experts.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Connect & Network</h3>
              <p className="text-dark">Join a vibrant community of blockchain enthusiasts, developers, and innovators.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Build Your Future</h3>
              <p className="text-dark">Gain skills and connections to pursue opportunities in the Web3 ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join BCC Form */}
      <section className="py-16 px-6 md:px-12 bg-lightGrey">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-dark mb-4">Join BCC Community</h2>
            <p className="text-dark mb-8">Fill out the form below to become a member and start your blockchain education journey.</p>
            
            <form onSubmit={handleJoinSubmit} className="space-y-6">
              <div>
                <label className="block text-dark font-semibold mb-2">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-secondary" />
                  <input
                    type="text"
                    required
                    value={joinForm.name}
                    onChange={(e) => setJoinForm({ ...joinForm, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-lightGrey rounded-lg focus:border-primary focus:outline-none transition"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-dark font-semibold mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-secondary" />
                  <input
                    type="email"
                    required
                    value={joinForm.email}
                    onChange={(e) => setJoinForm({ ...joinForm, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-lightGrey rounded-lg focus:border-primary focus:outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-dark font-semibold mb-2">Campus/Institution *</label>
                <div className="relative">
                  <School className="absolute left-3 top-3 w-5 h-5 text-secondary" />
                  <input
                    type="text"
                    required
                    value={joinForm.campus}
                    onChange={(e) => setJoinForm({ ...joinForm, campus: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-lightGrey rounded-lg focus:border-primary focus:outline-none transition"
                    placeholder="Your campus or institution"
                  />
                </div>
              </div>

              <div>
                <label className="block text-dark font-semibold mb-2">Area of Interest *</label>
                <select
                  required
                  value={joinForm.interest}
                  onChange={(e) => setJoinForm({ ...joinForm, interest: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-lightGrey rounded-lg focus:border-primary focus:outline-none transition"
                >
                  <option value="">Select your area of interest</option>
                  {interests.map((interest, index) => (
                    <option key={index} value={interest}>{interest}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-lg transition shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Join BCC Community
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Connect With Us - Enquiries */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-lightGrey p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-dark mb-4">Connect With Us</h2>
            <p className="text-dark mb-8">Have a partnership opportunity, event idea, or general question? We'd love to hear from you.</p>
            
            <form onSubmit={handleEnquirySubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-dark font-semibold mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-white rounded-lg focus:border-primary focus:outline-none transition bg-white"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-dark font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={enquiryForm.email}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-white rounded-lg focus:border-primary focus:outline-none transition bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-dark font-semibold mb-2">Enquiry Type *</label>
                <select
                  required
                  value={enquiryForm.subject}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, subject: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-white rounded-lg focus:border-primary focus:outline-none transition bg-white"
                >
                  <option value="">Select enquiry type</option>
                  {enquiryTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-dark font-semibold mb-2">Message *</label>
                <textarea
                  required
                  rows="5"
                  value={enquiryForm.message}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-white rounded-lg focus:border-primary focus:outline-none transition bg-white resize-none"
                  placeholder="Tell us more about your enquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary hover:bg-primary text-white font-bold py-4 rounded-lg transition shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social & Community Links */}
      <section className="py-16 px-6 md:px-12 bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community Channels</h2>
          <p className="text-lg mb-10">
            Connect with us on social media and join our active community channels for updates, discussions, and support.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://x.com/Bchain_YCTEpe"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg transition flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
              <span className="font-semibold">Follow on X</span>
            </a>
            <a
              href="https://bit.ly/WaBCCYCTEpe"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg transition flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
              <span className="font-semibold">Join WhatsApp</span>
            </a>
            <a
              href="https://t.me/BCC_YCTEpe"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg transition flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faTelegram} className="text-2xl" />
              <span className="font-semibold">Join Telegram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Blockchain Journey?</h2>
          <p className="text-lg mb-8">
            Join hundreds of students already learning, building, and innovating in the Web3 space with BCC.
          </p>
          <button className="bg-accent hover:bg-yellow-500 text-dark font-bold px-10 py-4 rounded-lg text-lg transition shadow-lg">
            Scroll Up to Join
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
