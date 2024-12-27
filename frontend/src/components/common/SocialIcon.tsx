import React from 'react';
import { SocialIconProps } from '../../types';

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href }) => {
  return (
    <a
      href={href}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={20} className="text-white" />
    </a>
  );
};

export default SocialIcon;