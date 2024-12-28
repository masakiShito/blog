import React from 'react';
import { Home, User, FileText, Image, Settings, Mail, Twitter, Facebook, Instagram, Linkedin, LucideIcon } from 'lucide-react';
import { Section } from '../../types';
import NavigationItem from '../common/NavigationItem';
import SocialIcon from '../common/SocialIcon';

interface SidebarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const NAVIGATION_ITEMS = [
  { id: 'home' as Section, label: 'Home', icon: Home },
  { id: 'about' as Section, label: 'About', icon: User },
  { id: 'resume' as Section, label: 'Resume', icon: FileText },
  { id: 'portfolio' as Section, label: 'Portfolio', icon: Image },
  { id: 'Blog' as Section, label: 'Blog', icon: Settings },
  { id: 'contact' as Section, label: 'Contact', icon: Mail },
];

const SOCIAL_ICONS = [
  { Icon: Twitter, href: '#' },
  { Icon: Facebook, href: '#' },
  { Icon: Instagram, href: '#' },
  { Icon: Linkedin, href: '#' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const scrollToSection = (sectionId: Section) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-[#040b14] text-white p-6 overflow-y-auto">
      <div className="text-center mb-8">
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-gray-700">
          <img
            src="/api/placeholder/128/128"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold mb-4">MoroFuji</h2>

        <div className="flex justify-center space-x-2 mb-6">
          {SOCIAL_ICONS.map((social) => (
            <SocialIcon key={social.href} {...social} />
          ))}
        </div>
      </div>

      <nav className="space-y-2">
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationItem
            key={item.id}
            {...item}
            isActive={activeSection === item.id}
            onClick={scrollToSection}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;