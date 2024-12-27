import React from 'react';
import { NavigationItemProps } from '../../types';

const NavigationItem: React.FC<NavigationItemProps> = ({
                                                         id,
                                                         label,
                                                         icon: Icon,
                                                         isActive,
                                                         onClick,
                                                       }) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`w-full flex items-center px-4 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-blue-500 text-white'
          : 'text-gray-300 hover:bg-gray-800'
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      {label}
    </button>
  );
};

export default NavigationItem;