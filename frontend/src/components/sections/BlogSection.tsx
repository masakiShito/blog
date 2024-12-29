// src/components/sections/BlogSection.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Webデザインのベストプラクティス2024",
    excerpt: "最新のWebデザイントレンドと実装テクニックについて解説します。",
    date: "2024-03-15",
    category: "Web Design",
    imageUrl: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "ReactとLaravelの効率的な連携方法",
    excerpt: "フロントエンドとバックエンドの統合についての実践的なガイド。",
    date: "2024-03-10",
    category: "Development",
    imageUrl: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "モダンなポートフォリオサイトの作り方",
    excerpt: "ポートフォリオサイトの設計から実装までを詳しく解説。",
    date: "2024-03-05",
    category: "Portfolio",
    imageUrl: "/api/placeholder/400/250"
  }
];

const BlogSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-emerald-700 bg-emerald-100 font-medium text-sm mb-4">
            <Newspaper className="w-4 h-4 mr-2" />
            Latest Articles
          </span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-black bg-clip-text">
            おすすめ記事
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mockBlogPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-emerald-700 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <time className="text-sm text-emerald-600 mb-2 block font-medium">
                  {post.date}
                </time>
                <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <button
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200 flex items-center gap-1 group/btn"
                >
                  続きを読む
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 group"
          >
            <span>すべての記事を見る</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;