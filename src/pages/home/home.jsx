import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import filecoinLogo from '../../assets/images/logo/filecoin-logo.png';
import w3uLogo from '../../assets/images/logo/w3u-logo.png';
import o3Logo from '../../assets/images/logo/o3-logo.png';
import inspiryaLogo from '../../assets/images/logo/inspirya-logo.png';
import rsuLogo from '../../assets/images/logo/rsu-logo.png';
import btbLogo from '../../assets/images/logo/btb-logo.png';
import stellarLogo from '../../assets/images/logo/stellar-logo.png';
import heroImage from '../../assets/images/classes/class2.jpg';

const Home = () => {
  const [zoomedLogo, setZoomedLogo] = useState(null);
  const [currentCard, setCurrentCard] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const milestoneRef = useRef(null);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % whatWeDoCards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [whatWeDoCards.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !showConfetti) {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 5000);
        }
      },
      { threshold: 0.5 }
    );
    if (milestoneRef.current) observer.observe(milestoneRef.current);
    return () => observer.disconnect();
  }, [showConfetti]);

  const handleCardClick = () => {
    setCurrentCard((prev) => (prev + 1) % whatWeDoCards.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative text-white py-20 px-6 md:px-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-primary/70"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simplifying Blockchain Education for Students
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-4xl mx-auto leading-relaxed">
            BlockChain on Campus (BCC) is a student-focused blockchain education community dedicated to making Web3 concepts simple, practical, and accessible through structured learning and community engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <button className="bg-accent hover:bg-yellow-500 text-dark font-bold px-8 py-4 rounded-lg text-lg transition shadow-lg">
                Join the BCC Community
              </button>
            </Link>
            <Link to="/community" onClick={() => window.scrollTo(0, 0)}>
              <button className="bg-white hover:bg-lightGrey text-primary font-bold px-8 py-4 rounded-lg text-lg transition shadow-lg">
                Explore Our Programs
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-16 px-6 md:px-12 bg-lightGrey">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">What We Do</h2>
          <div className="flex justify-center items-center min-h-[300px]">
            <div 
              onClick={handleCardClick}
              className="bg-white p-8 rounded-lg shadow-[0_10px_40px_rgba(15,169,88,0.3)] hover:shadow-[0_15px_50px_rgba(17,145,70,1)] transition-all duration-500 max-w-md w-full cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">{currentCard + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{whatWeDoCards[currentCard].title}</h3>
              <p className="text-dark">{whatWeDoCards[currentCard].description}</p>
              <div className="text-center mt-4 text-sm text-gray-500">
                {currentCard + 1} / {whatWeDoCards.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className={`bg-white border-2 border-lightGrey p-6 rounded-lg flex flex-col items-center justify-center text-center hover:border-primary hover:shadow-lg transition-all duration-300 min-h-[180px] cursor-pointer ${
                  zoomedLogo === index ? 'fixed inset-0 z-50 scale-150 m-auto w-96 h-96' : ''
                }`}
                onClick={() => setZoomedLogo(zoomedLogo === index ? null : index)}
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
        
        {/* Blur Overlay */}
        {zoomedLogo !== null && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
            onClick={() => setZoomedLogo(null)}
          ></div>
        )}
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
      <section ref={milestoneRef} className="py-16 px-6 md:px-12 bg-lightGrey relative">
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 animate-[fall_5s_linear_forwards]"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-10px',
                  backgroundColor: ['#0FA958', '#F2B705', '#0B7E43', '#FF6B6B'][Math.floor(Math.random() * 4)],
                  animationDelay: `${Math.random() * 2}s`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              />
            ))}
          </div>
        )}
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
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <button className="bg-accent hover:bg-yellow-500 text-dark font-bold px-10 py-5 rounded-lg text-xl transition shadow-2xl">
              Join the BCC Community Today
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
