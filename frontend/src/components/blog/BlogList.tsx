import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, Category, Tag, BlogListProps } from '../../types';

const BlogList: React.FC<BlogListProps> = ({ tag, index }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <div className="w-full p-8">
      {/* カテゴリーフィルター */}
      <div className="mb-8">
        <div className="flex gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded ${
                selectedCategory === category.slug ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category.slug)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* 記事一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <div className="text-sm text-gray-600 mb-2">
              {new Date(post.created_at).toLocaleDateString()}
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-gray-100 px-2 py-1 rounded-full text-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;