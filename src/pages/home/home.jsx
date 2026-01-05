import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import filecoinLogo from '../../assets/images/logo/filecoin-logo.png';
import w3uLogo from '../../assets/images/logo/w3u-logo.png';
import o3Logo from '../../assets/images/logo/o3-logo.png';
import inspiryaLogo from '../../assets/images/logo/inspirya-logo.png';
import rsuLogo from '../../assets/images/logo/rsu-logo.png';
import btbLogo from '../../assets/images/logo/btb-logo.png';
import stellarLogo from '../../assets/images/logo/stellar-logo.png';

const Home = () => {
  const whatWeDoCards = [
    { title: 'Physical Blockchain Classes', description: 'Hands-on learning sessions to understand blockchain fundamentals' },
    { title: 'Weekly Blockchain Tips', description: 'Stay updated with the latest Web3 insights and practical tips' },
    { title: 'Monthly Community Calls', description: 'Connect with industry experts and fellow blockchain enthusiasts' },
    { title: 'Trivia Games & Engagement', description: 'Fun, interactive games to test and expand your blockchain knowledge' },
    { title: 'Student Capacity Building', description: 'Empowering students with skills for the decentralized future' }
  ];

  const partners = [
    { name: 'Filecoin', logo: filecoinLogo },
    { name: 'Stellar', logo: stellarLogo },
    { name: 'Web3UniLag', logo: w3uLogo },
    { name: 'O3FinanceSchool', logo: o3Logo },
    { name: 'Inspirya', logo: inspiryaLogo },
    { name: 'Blockchain Club (RSU)', logo: rsuLogo },
    { name: 'Beyond the Box', logo: btbLogo }
  ];

  const stats = [
    { value: '500+', label: 'Students Trained' },
    { value: '7', label: 'Partnerships Formed' },
    { value: '25+', label: 'Events Hosted' },
    { value: '1', label: 'Years of Impact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simplifying Blockchain Education for Students
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-4xl mx-auto leading-relaxed">
            BlockChain on Campus (BCC) is a student-focused blockchain education community dedicated to making Web3 concepts simple, practical, and accessible through structured learning and community engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent hover:bg-yellow-500 text-dark font-bold px-8 py-4 rounded-lg text-lg transition shadow-lg">
              Join the BCC Community
            </button>
            <button className="bg-white hover:bg-lightGrey text-primary font-bold px-8 py-4 rounded-lg text-lg transition shadow-lg">
              Explore Our Programs
            </button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-6 md:px-12 bg-lightGrey">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDoCards.map((card, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{card.title}</h3>
                <p className="text-dark">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white border-2 border-lightGrey p-6 rounded-lg flex flex-col items-center justify-center text-center hover:border-primary hover:shadow-lg transition-all duration-300 min-h-[180px]"
              >
                {partner.logo ? (
                  <>
                    <div className="w-full h-24 flex items-center justify-center mb-3">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="font-semibold text-sm text-dark mt-2">{partner.name}</span>
                  </>
                ) : (
                  <span className="font-semibold text-lg text-dark">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 px-6 md:px-12 bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1-Year Anniversary Milestone */}
      <section className="py-16 px-6 md:px-12 bg-lightGrey">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-accent text-dark font-bold px-6 py-2 rounded-full mb-6 text-lg">
            🎉 Milestone Alert
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
            Celebrating 1 Year of Impact
          </h2>
          <p className="text-xl text-dark mb-6">
            Join us as we mark our <span className="text-accent font-bold">1-Year Anniversary</span> on
          </p>
          <div className="text-4xl md:text-6xl font-bold text-primary mb-8">
            September 21, 2025
          </div>
          <p className="text-lg text-dark">
            A year of empowering students, building partnerships, and simplifying blockchain education.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Blockchain Journey?
          </h2>
          <p className="text-lg md:text-xl mb-10">
            Join hundreds of students already learning and building in the Web3 space.
          </p>
          <button className="bg-accent hover:bg-yellow-500 text-dark font-bold px-10 py-5 rounded-lg text-xl transition shadow-2xl">
            Join the BCC Community Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
