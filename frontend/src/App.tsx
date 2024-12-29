// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Section } from './types';
import Layout from './components/Layout';
import BlogLayout from './components/blog/BlogLayout';
import MainContent from './components/layout/MainContent';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';
import BlogCategory from './components/blog/BlogCategory';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
              <MainContent setActiveSection={setActiveSection} />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <BlogLayout>
              <BlogList />
            </BlogLayout>
          }
        />
        <Route
          path="/blog/category/:categoryId"
          element={
            <BlogLayout>
              <BlogCategory />
            </BlogLayout>
          }
        />
        <Route
          path="/blog/:postId"
          element={
            <BlogLayout>
              <BlogPost />
            </BlogLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;