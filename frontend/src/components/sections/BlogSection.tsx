import React from 'react';

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
  return (
    <section id="Blog" className="py-16 bg-gray-50"> {/* id属性を追加 */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">おすすめ記事</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBlogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-blue-600">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                  続きを読む →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;