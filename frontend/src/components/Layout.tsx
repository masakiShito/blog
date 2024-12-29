// src/components/Layout.tsx
import React from 'react';
import { Section } from '../types';
import Sidebar from './layout/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  activeSection?: Section;
  setActiveSection?: (section: Section) => void;
}

const Layout: React.FC<LayoutProps> = ({
                                         children,
                                         activeSection = 'home',
                                         setActiveSection = () => {}
                                       }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      {children}
    </div>
  );
};

export default Layout;