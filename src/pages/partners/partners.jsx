import React from 'react';
import { Users, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import filecoinImg from '../../assets/images/partnerships/bcc-filecoin.jpg';
import w3uImg from '../../assets/images/partnerships/bcc-w3u.jpg';
import o3Img from '../../assets/images/partnerships/bcc-o3.jpg';
import inspiryaImg from '../../assets/images/partnerships/bcc-inspirya.jpg';
import rsuImg from '../../assets/images/partnerships/bcc-rsu.jpg';
import btbImg from '../../assets/images/partnerships/bcc-btb.jpg';

const Partners = () => {
  const partners = [
    {
      name: 'Filecoin',
      type: 'Web3 Technology Partner',
      description: 'Collaborating on decentralized storage education and hands-on workshops that introduce students to IPFS and Filecoin network fundamentals.',
      image: filecoinImg
    },
    {
      name: 'Stellar',
      type: 'Blockchain Infrastructure Partner',
      description: 'Partnering to deliver educational content on blockchain payments, cross-border transactions, and building on the Stellar network.',
      image: null
    },
    {
      name: 'Web3UniLag',
      type: 'Campus Community Partner',
      description: 'Joint initiatives with University of Lagos blockchain community to expand Web3 education reach and host collaborative learning events.',
      image: w3uImg
    },
    {
      name: 'O3FinanceSchool',
      type: 'DeFi Education Partner',
      description: 'Working together to simplify decentralized finance concepts and provide students with practical DeFi literacy and skills development.',
      image: o3Img
    },
    {
      name: 'Inspirya',
      type: 'Innovation & Capacity Building Partner',
      description: 'Collaborating on student capacity building programs that combine blockchain education with entrepreneurship and innovation training.',
      image: inspiryaImg
    },
    {
      name: 'Blockchain Club (RSU)',
      type: 'Campus Community Partner',
      description: 'Strategic partnership with Rivers State University blockchain club to share resources, knowledge, and expand blockchain education across campuses.',
      image: rsuImg
    },
    {
      name: 'Beyond the Box',
      type: 'Community Engagement Partner',
      description: 'Partnering to create engaging blockchain learning experiences and community-driven initiatives that make Web3 accessible to diverse audiences.',
      image: btbImg
    }
  ];

  const impactAreas = [
    {
      icon: Calendar,
      title: 'Joint Events & Workshops',
      description: 'Collaborative educational programs that bring together expertise and resources',
      examples: [
        'Co-hosted Filecoin storage workshops with hands-on IPFS training',
        'Joint Web3UniLag meetups reaching 200+ students across campuses',
        'Quarterly DeFi literacy sessions with O3FinanceSchool'
      ]
    },
    {
      icon: Users,
      title: 'Knowledge Sharing',
      description: 'Cross-pollination of expertise and educational resources across communities',
      examples: [
        'Shared curriculum development with campus blockchain clubs',
        'Guest speaker exchanges bringing industry professionals to students',
        'Collaborative content creation for weekly blockchain tips and resources'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Community Expansion',
      description: 'Growing the blockchain education ecosystem through strategic partnerships',
      examples: [
        'Expanded reach to 3 additional campuses through partner networks',
        'Increased student participation by 150% through collaborative marketing',
        'Built a unified Web3 education community across Lagos institutions'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Partners & Collaborations</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Building a stronger blockchain education ecosystem through strategic partnerships with leading Web3 organizations and campus communities.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg text-dark leading-relaxed">
            At BCC, we believe that collaboration amplifies impact. Our partnerships with Web3 industry leaders and campus blockchain communities enable us to deliver richer educational experiences, expand our reach, and create meaningful opportunities for students. Together, we're building a connected ecosystem where knowledge flows freely and students gain access to real-world blockchain expertise.
          </p>
        </div>
      </section>

      {/* Partner Cards */}
      <section className="py-16 px-6 md:px-12 bg-lightGrey">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">Our Strategic Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:opacity-50 hover:!opacity-100 hover:scale-105">
                {partner.image && (
                  <div className="w-full h-48 overflow-hidden">
                    <img 
                      src={partner.image} 
                      alt={`${partner.name} partnership`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-secondary mb-2">{partner.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{partner.type}</p>
                  <p className="text-dark leading-relaxed">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Impact */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">Partnership Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="bg-lightGrey p-8 rounded-lg">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">{area.title}</h3>
                  <p className="text-dark leading-relaxed mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-dark text-sm">
                        <span className="text-accent font-bold mt-1">✓</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Partnering with BCC?</h2>
          <p className="text-lg mb-8">
            We're always looking to collaborate with organizations and communities that share our vision of accessible blockchain education.
          </p>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <button className="bg-accent hover:bg-yellow-500 text-dark font-bold px-10 py-4 rounded-lg text-lg transition shadow-lg">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
