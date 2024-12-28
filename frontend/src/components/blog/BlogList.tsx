// BlogList.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, BlogListProps } from '../../types';

const BlogList: React.FC<BlogListProps> = ({ tag, index }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 投稿一覧を取得
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/v1/posts');
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Error fetching posts');
        }
        const data = await response.json();
        setPosts(data.data);
      } catch (err) {
        console.error('Error details:', err);
        setError('投稿の取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="w-full p-8">
      {/* ローディング表示 */}
      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* 記事一覧 */}
      {!loading && (
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
                {post.tags?.map((tag) => (
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
      )}

      {/* 投稿が存在しない場合 */}
      {!loading && posts.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          投稿が見つかりませんでした
        </div>
      )}
    </div>
  );
};

export default BlogList;