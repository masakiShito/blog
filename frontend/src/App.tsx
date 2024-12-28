import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Section } from './types';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';
import BlogCategory from './components/blog/BlogCategory';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <Routes>
          <Route path="/" element={<MainContent setActiveSection={setActiveSection} />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/category/:categoryId" element={<BlogCategory />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;