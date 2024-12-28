import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  created_at: string;
  tags: Array<{
    id: number;
    name: string;
  }>;
}

interface Category {
  id: number;
  name: string;
  posts: Post[];
}

const BlogCategory: React.FC = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`/api/categories/${categoryId}/posts`);
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error('Error fetching category:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categoryId]);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!category) {
    return <div className="p-8">Category not found</div>;
  }

  return (
    <div className="w-full p-8">
      <Link to="/blog" className="flex items-center gap-2 text-gray-600 mb-8 hover:text-gray-900">
        <ArrowLeft size={20} />
        Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.posts.map(post => (
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
              {post.tags.map(tag => (
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

export default BlogCategory;