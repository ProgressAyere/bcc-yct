import React from 'react';
import { BookOpen, Lightbulb, Users, Shield, Sparkles } from 'lucide-react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import missionImage from '../../assets/images/mission-image.png';

const Mission = () => {
  const coreValues = [
    { title: 'Education', icon: BookOpen, description: 'Empowering students with knowledge and skills for the blockchain future' },
    { title: 'Simplicity', icon: Lightbulb, description: 'Making complex Web3 concepts accessible and easy to understand' },
    { title: 'Community', icon: Users, description: 'Building a supportive network of learners and blockchain enthusiasts' },
    { title: 'Integrity', icon: Shield, description: 'Upholding ethical practices and transparency in all our endeavors' },
    { title: 'Innovation', icon: Sparkles, description: 'Embracing new ideas and technologies to drive progress' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Mission & Vision</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Guiding principles that drive our commitment to blockchain education and student empowerment.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Mission</h2>
              <p className="text-lg text-dark leading-relaxed">
                To create a blockchain ecosystem that promotes sustainability, transparency, security and ethical practices in the digital world and to ensure the sovereignty of individuals in the digital age.
              </p>
            </div>
            <div>
              <img src={missionImage} alt="BCC Mission" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 px-6 md:px-12 bg-lightGrey">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Vision</h2>
          <p className="text-lg text-dark leading-relaxed max-w-4xl mx-auto">
            To build a blockchain powered world where financial freedom, data privacy and digital sovereignty are accessible to all, promoting social impact, and ethical practices in all endeavours and to usher in a new era of empowerment.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-lightGrey p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">{value.title}</h3>
                  <p className="text-dark leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Our Mission</h2>
          <p className="text-lg mb-8">
            Be part of a community committed to ethical blockchain education and digital empowerment.
          </p>
          <button className="bg-accent hover:bg-yellow-500 text-dark font-bold px-10 py-4 rounded-lg text-lg transition shadow-lg">
            Get Involved
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;
