import React from 'react';
import AnimatedElement from './AnimatedElement';
import { useDarkMode } from '../hooks/useDarkMode';
import LogoWhite from '../assets/images/molus-logo-horizontal-white-yellow.png';
import LogoBlack from '../assets/images/molus-logo-horizontal-black-yellow.png';

const Footer: React.FC = () => {
  const { isDark } = useDarkMode();
  const logoSrc = isDark ? LogoWhite : LogoBlack;
  return (
    <footer className="bg-black text-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <AnimatedElement animation="slideUp" delay={0.2} className="md:col-span-1">
            <img
              src={logoSrc}
              alt="Molus Logo"
              className="h-12 md:h-16 mb-4"
            />
            <p className="font-['Helvetica_Neue'] font-light text-gray-400 mb-4">
              Supporting solo builders, creators, and tinkerers on their founder journey.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" label="Twitter" icon="twitter" />
              <SocialLink href="#" label="LinkedIn" icon="linkedin" />
              <SocialLink href="#" label="Discord" icon="discord" />
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slideUp" delay={0.3} className="md:col-span-1">
            <FooterSection title="Community" links={communityLinks} />
          </AnimatedElement>
          
          <AnimatedElement animation="slideUp" delay={0.4} className="md:col-span-1">
            <FooterSection title="Resources" links={resourceLinks} />
          </AnimatedElement>
          
          <AnimatedElement animation="slideUp" delay={0.5} className="md:col-span-1">
            <FooterSection title="Contact" links={contactLinks} />
          </AnimatedElement>
        </div>
        
        <AnimatedElement animation="slideUp" delay={0.6}>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-['Helvetica_Neue'] font-light text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Molus. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white dark:hover:text-primary-dark text-sm font-['Helvetica_Neue'] font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white dark:hover:text-primary-dark text-sm font-['Helvetica_Neue'] font-light">
                Terms of Service
              </a>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; label: string; icon: string }> = ({ href, label, icon }) => (
  <a href={href} className="text-gray-400 hover:text-white dark:hover:text-primary-dark">
    <span className="sr-only">{label}</span>
    <div className="w-6 h-6" />
  </a>
);

const FooterSection: React.FC<{ title: string; links: Array<{ label: string; href: string }> }> = ({ 
  title, 
  links 
}) => (
  <>
    <h3 className="font-['Helvetica_Neue'] font-medium text-lg mb-4">{title}</h3>
    <ul className="space-y-2 font-['Helvetica_Neue'] font-light">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="text-gray-400 hover:text-white dark:hover:text-primary-dark">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </>
);

const communityLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Ship It Schedule', href: '#ship-it' },
  { label: 'Discord', href: '#' },
  { label: 'Events', href: '#' }
];

const resourceLinks = [
  { label: 'Knowledge Base', href: '#' },
  { label: 'Project Gallery', href: '#' },
  { label: 'Partner Organizations', href: '#' },
  { label: 'FAQ', href: '#faq' }
];

const contactLinks = [
  { label: 'Contact Us', href: '#' },
  { label: 'Partner With Us', href: '#' }
];

export default Footer;