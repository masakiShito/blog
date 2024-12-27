import React, { useState } from 'react';
import { Section } from './types';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContent setActiveSection={setActiveSection} />
    </div>
  );
};

export default App;