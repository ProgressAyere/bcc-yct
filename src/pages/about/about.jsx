import React from 'react';
import { MapPin, GraduationCap, Globe } from 'lucide-react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const About = () => {
  const journeySteps = [
    { title: 'Formation', description: 'Established as a student-led initiative to democratize blockchain education' },
    { title: 'Growth', description: 'Expanded programs and community reach across campus networks' },
    { title: 'Recognition', description: 'Gained acknowledgment as a leading campus blockchain community' },
    { title: 'Partnerships', description: 'Collaborated with industry leaders to enhance learning opportunities' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About BlockChain on Campus</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Empowering the next generation of blockchain innovators through accessible education and community-driven learning.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Who We Are</h2>
          <p className="text-lg text-dark leading-relaxed mb-6">
            BlockChain on Campus (BCC) is a campus-based blockchain education community committed to equipping students with the knowledge and skills needed to thrive in the Web3 ecosystem.
          </p>
          <p className="text-lg text-dark leading-relaxed">
            We focus on simplifying complex blockchain concepts through hands-on learning, community discussions, and real-world exposure — ensuring students can learn, grow, and participate confidently in the blockchain space.
          </p>
        </div>
      </section>

      {/* Why BCC Exists */}
      <section className="py-16 px-6 md:px-12 bg-lightGrey">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8 text-center">Why BCC Exists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Bridging the Knowledge Gap</h3>
              <p className="text-dark leading-relaxed">
                We address the lack of accessible blockchain education in campuses, making it easier for students to understand and engage with emerging technologies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Making Web3 Accessible</h3>
              <p className="text-dark leading-relaxed">
                We break down complex Web3 concepts into simple, practical lessons that students can apply in real-world scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-lightGrey p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-dark text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 text-center">{step.title}</h3>
                  <p className="text-dark text-sm leading-relaxed text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Focus */}
      <section className="py-16 px-6 md:px-12 bg-secondary text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Campus Focus</h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-accent mb-4">Current Campus</h3>
            <p className="text-lg mb-2 flex items-center gap-2"><MapPin className="w-5 h-5" /> Yaba College of Technology, Epe</p>
            <p className="text-sm leading-relaxed">
              Our flagship campus where we deliver comprehensive blockchain education programs, workshops, and community events.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-accent mb-4">Expansion Vision</h3>
            <p className="text-lg leading-relaxed">
              Through strategic collaborations and partnerships, we are expanding our reach to more campuses, bringing blockchain education to students across institutions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8">
            Be part of a growing network of students learning and building in the blockchain space.
          </p>
          <button className="bg-accent hover:bg-yellow-500 text-dark font-bold px-10 py-4 rounded-lg text-lg transition shadow-lg">
            Get Started with BCC
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
