// src/components/blog/BlogLayout.tsx
import React from 'react';
import BlogHeader from './BlogHeader';

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader />
      <main>
        {children}
      </main>
    </div>
  );
};

export default BlogLayout;