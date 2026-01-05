import React, { useState } from 'react';
import { Calendar, Users, Lightbulb, Trophy, MessageCircle, BookOpen, X } from 'lucide-react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import anniversary1 from '../../assets/images/anniversary/anniversary1.jpg';
import class1 from '../../assets/images/classes/class1.jpg';
import class2 from '../../assets/images/classes/class2.jpg';
import class3 from '../../assets/images/classes/class3.jpg';
import class4 from '../../assets/images/classes/class4.jpg';
import class5 from '../../assets/images/classes/class5.jpg';
import class6 from '../../assets/images/classes/class6.jpg';
import class7 from '../../assets/images/classes/class7.jpg';
import class8 from '../../assets/images/classes/class8.jpg';
import class9 from '../../assets/images/classes/class9.jpg';
import class10 from '../../assets/images/classes/class10.png';
import class11 from '../../assets/images/classes/class11.png';
import filecoin1 from '../../assets/images/filecoin/filecoin1.png';
import filecoin2 from '../../assets/images/filecoin/filecoin2.png';
import filecoin3 from '../../assets/images/filecoin/filecoin3.png';
import filecoin4 from '../../assets/images/filecoin/filecoin4.png';
import filecoin5 from '../../assets/images/filecoin/filecoin5.png';
import filecoin6 from '../../assets/images/filecoin/filecoin6.JPG';
import filecoin7 from '../../assets/images/filecoin/filecoin7.JPG';
import stellar1 from '../../assets/images/stellar/Stellar1.jpg';
import stellar2 from '../../assets/images/stellar/Stellar2.jpg';
import stellar3 from '../../assets/images/stellar/Stellar3.jpg';
import web3unilag1 from '../../assets/images/web3unilag/biu.jpg';

const Community = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const milestones = [
    { date: 'September 2024', title: 'BCC Formation', description: 'Launched as a student-led blockchain education initiative at Yaba College of Technology' },
    { date: 'October 2024', title: 'First Physical Class', description: 'Hosted inaugural blockchain fundamentals workshop with 50+ students' },
    { date: 'September 2024', title: 'Filecoin Partnership', description: 'Established collaboration with Filecoin for decentralized storage education' },
    { date: 'November 2024', title: 'Web3UniLag Alliance', description: 'Formed strategic partnership with University of Lagos blockchain community' },
    { date: 'January 2025', title: 'Monthly Calls Launch', description: 'Initiated monthly community calls featuring industry experts and open discussions' },
    { date: 'March 2025', title: 'Multi-Campus Expansion', description: 'Extended reach to Rivers State University and additional campus communities' },
    { date: 'June 2025', title: '500+ Students Milestone', description: 'Reached 500+ students trained across all programs and workshops' },
    { date: 'September 2025', title: '1-Year Anniversary', description: 'Celebrating one year of impact, growth, and blockchain education excellence' }
  ];

  const activities = [
    {
      icon: Calendar,
      title: 'Monthly Community Calls',
      description: 'Regular virtual gatherings with industry experts, Q&A sessions, and networking opportunities',
      impact: '12+ calls hosted, 300+ participants'
    },
    {
      icon: Trophy,
      title: 'Trivia Games & Challenges',
      description: 'Interactive blockchain quizzes and competitions that make learning fun and engaging',
      impact: '20+ games, 150+ active players'
    },
    {
      icon: Lightbulb,
      title: 'Weekly Blockchain Tips',
      description: 'Curated insights and practical advice delivered to keep the community informed',
      impact: '40+ tips shared, 500+ subscribers'
    },
    {
      icon: BookOpen,
      title: 'Physical Blockchain Classes',
      description: 'Hands-on workshops covering blockchain fundamentals, smart contracts, and DeFi',
      impact: '15+ classes, 500+ students trained'
    },
    {
      icon: Users,
      title: 'Campus Collaborations',
      description: 'Joint initiatives with partner communities to expand blockchain education reach',
      impact: '3 campus partnerships, 7 joint events'
    },
    {
      icon: MessageCircle,
      title: 'Community Support',
      description: 'Active online channels providing peer support, mentorship, and learning resources',
      impact: '200+ active members, 24/7 support'
    }
  ];

  const highlights = [
    { 
      title: 'Filecoin Workshop Series', 
      description: 'Multi-session program on decentralized storage and IPFS', 
      attendees: '80+ students',
      images: [filecoin1, filecoin2, filecoin3, filecoin4, filecoin5, filecoin6, filecoin7]
    },
    { 
      title: 'Stellar Blockchain Education', 
      description: 'Hands-on workshops on blockchain payments and Stellar network', 
      attendees: '90+ participants',
      images: [stellar1, stellar2, stellar3]
    },
    { 
      title: 'Web3UniLag Collaboration', 
      description: 'Joint initiatives with University of Lagos blockchain community', 
      attendees: '150+ attendees',
      images: [web3unilag1]
    },
    { 
      title: 'Physical Blockchain Classes', 
      description: 'Regular hands-on learning sessions covering blockchain fundamentals', 
      attendees: '500+ students trained',
      images: [class1, class2, class3, class4, class5, class6, class7, class8, class9, class10, class11]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Community & Impact</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Building a thriving blockchain education ecosystem through community engagement, collaborative learning, and measurable impact.
          </p>
        </div>
      </section>

      {/* Page Intro */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg text-dark leading-relaxed mb-6">
            Since our inception, BCC has grown from a small campus initiative to a vibrant community of blockchain enthusiasts, learners, and innovators. Our impact extends beyond numbers—we're creating a generation of students equipped with the knowledge and confidence to participate in the Web3 revolution.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-dark">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-dark">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">7</div>
              <div className="text-sm text-dark">Strategic Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-dark">Campus Communities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 px-6 md:px-12 bg-lightGrey">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                      <div className="text-accent font-bold mb-2">{milestone.date}</div>
                      <h3 className="text-xl font-bold text-secondary mb-2">{milestone.title}</h3>
                      <p className="text-dark text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-accent rounded-full border-4 border-white shadow-md z-10 my-4 md:my-0"></div>
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Activities */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">Community Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="bg-lightGrey p-6 rounded-lg hover:shadow-lg transition">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{activity.title}</h3>
                  <p className="text-dark text-sm leading-relaxed mb-3">{activity.description}</p>
                  <div className="text-accent font-semibold text-sm">{activity.impact}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events & Highlights with Gallery */}
      <section id="physical-classes" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">Event Highlights & Gallery</h2>
          <div className="space-y-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-lightGrey p-8 rounded-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-secondary mb-3">{highlight.title}</h3>
                  <p className="text-dark leading-relaxed mb-2">{highlight.description}</p>
                  <div className="text-accent font-semibold">👥 {highlight.attendees}</div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {highlight.images.map((image, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${highlight.title} ${imgIndex + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anniversary Highlight */}
      <section className="py-16 px-6 md:px-12 bg-secondary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-accent text-dark font-bold px-6 py-2 rounded-full mb-6 text-lg">
                🎉 Special Milestone
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Celebrating 1 Year of Impact
              </h2>
              <p className="text-xl mb-6">
                Join us as we celebrate our <span className="text-accent font-bold">1-Year Anniversary</span> on
              </p>
              <div className="text-4xl md:text-6xl font-bold text-accent mb-6">
                September 21, 2025
              </div>
              <p className="text-lg">
                A year of empowering students, building partnerships, and simplifying blockchain education across campuses.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={anniversary1} alt="BCC 1-Year Anniversary" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing Community</h2>
          <p className="text-lg mb-8">
            Be part of a vibrant network of students learning, building, and innovating in the blockchain space.
          </p>
          <button className="bg-accent hover:bg-yellow-500 text-dark font-bold px-10 py-4 rounded-lg text-lg transition shadow-lg">
            Become a Member
          </button>
        </div>
      </section>

      <Footer />

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-accent transition"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full">
            <img src={selectedImage} alt="Gallery" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
