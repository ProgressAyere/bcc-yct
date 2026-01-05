import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faWhatsapp, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logoLong from '../../assets/images/logo/logo-long.png';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'What We Do', 'Partners', 'Join BCC'];
  const communityLinks = ['Monthly Calls', 'Physical Classes', 'Trivia Games'];
  const socialLinks = [
    { name: 'X/Twitter', url: 'https://x.com/Bchain_YCTEpe', icon: faXTwitter },
    { name: 'WhatsApp', url: 'https://bit.ly/WaBCCYCTEpe', icon: faWhatsapp },
    { name: 'Telegram', url: 'https://t.me/Bchain_YCTEpe', icon: faTelegram },
    { name: 'Instagram', url: 'https://www.instagram.com/bchain_yctepe/', icon: faInstagram }
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* BCC Logo and Tagline */}
          <div>
            <img src={logoLong} alt="BlockChain on Campus" className="h-10 mb-4" />
            <p className="text-sm leading-relaxed">Simplifying blockchain education for students.</p>
          </div>

          {/* About BCC */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">About BCC</h3>
            <p className="text-sm leading-relaxed">
              A student-focused blockchain education community making Web3 concepts simple, practical, and accessible.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm hover:text-[#0FA958] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community & Events */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Community & Events</h3>
            <ul className="space-y-2 mb-6">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm hover:text-[#0FA958] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Connect With Us */}
            <h3 className="text-lg font-bold mb-3 text-accent">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.name}
                  className="text-xl hover:text-[#0FA958] transition-colors duration-300"
                  title={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 pt-6">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} BlockChain on Campus (BCC). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
